// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Mainroute from './routes/Mainroute';
import Footer from './components/footer/Footer';
import ProductPage from './pages/productPage/ProductPage';
import SingleProductPage from './pages/productPage/singleProductPage/SingleProductPage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CustomArrows from './pages/productPage/singleProductPage/SingleProductPage';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Mainroute /> */}
      {/* <Footer /> */}
<CustomArrows/>
   
    </div>
  );
}

export default App;
