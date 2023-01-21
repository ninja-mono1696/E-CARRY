
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Mainroute from './routes/Mainroute';
import Footer from './components/footer/Footer';
import ProductPage from './pages/productPage/ProductPage';
// import SingleProductPage from './pages/productPage/singleProductPage/SingleProductPage';

import Login from './components/login/Login';
import "./App.css";

import { SingleProductPage } from './pages/productPage/singleProductPage/SingleProductPage';
import Cart from './pages/cartPage/Cart';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainroute />
       <Footer />
       
  
   
    </div>
  );
}

export default App;
