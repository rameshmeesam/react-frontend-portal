import './tailwind.css';
//import './tailwind.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from "./components/Layout";
import Baby from "./components/fashion/baby";
import Kids from "./components/fashion/kids";
import Men from "./components/fashion/men";
import Women from "./components/fashion/women";
import ProductList from "./components/products/ProductList"
import useAxios from './components/hooks/useAxios';


const App = () => {
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  console.log(response)

  return ( 
      <div>
        <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/baby" element={<Baby />} />
        </Routes>
      </div>
    
  );
};

export default App;


