// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Mainroute from './routes/Mainroute';
import Footer from './components/footer/Footer';
import ProductPage from './pages/productPage/ProductPage';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Mainroute /> */}
      {/* <Footer /> */}

      <ProductPage/>
    </div>
  );
}

export default App;
