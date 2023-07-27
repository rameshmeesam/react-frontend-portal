import './tailwind.css';
//import './tailwind.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from "./components/Layout";
import Baby from "./components/fashion/baby";
import Kids from "./components/fashion/kids";
import Men from "./components/fashion/men";
import Women from "./components/fashion/women";

const App = () => {
  return ( 
      <div>
        <Routes>
        <Route path="/" element={<Men />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/baby" element={<Baby />} />
        </Routes>
      </div>
    
  );
};

export default App;


