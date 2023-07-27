import './tailwind.css';
//import './tailwind.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MyTest from "./components/MyTest";
import ProductList from "./components/ProductList"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default App;