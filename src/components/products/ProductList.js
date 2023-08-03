import '../../tailwind.css';
//import './tailwind.css';
//import Men from "./components/fashion/men";


import useAxios from '../hooks/useAxios';
import Product from './Product';
import { createContext } from 'react';

export const ProductsContext = createContext();



const ProductList = () => {
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=t-shirt&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  console.log(response);

  const data = {
    products : response,
    isLoading,
    error,
    fetchData
  }
  

  return ( 
      <ProductsContext.Provider value={data}>
       <Product />
      </ProductsContext.Provider>
    
  );
};

export default ProductList;


