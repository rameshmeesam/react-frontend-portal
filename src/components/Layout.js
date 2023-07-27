//import './tailwind.css';
//import './tailwind.css';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        {props.childrens}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;