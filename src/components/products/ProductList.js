import "../../tailwind.css";
import useAxios from "../hooks/useAxios";
import Product from "./Product";
import { createContext, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

export const ProductsContext = createContext();

const ProductList = () => {
  const [searchText, setSearchText] = useState("t-shirt");
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=${searchText}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );
  console.log(response);

  const handleSearchText = (value) => {
    setSearchText(value);
  };

  const data = {
    products: response,
    isLoading,
    error,
    fetchData,
    searchHandler: handleSearchText,
  };

  return (
    <ProductsContext.Provider value={data}>
      <Header />
      <Product />
      <Footer />
    </ProductsContext.Provider>
  );
};

export default ProductList;
