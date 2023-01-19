<<<<<<< HEAD
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Mainroute from './routes/Mainroute';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
=======
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Mainroute from "./routes/Mainroute";
import Footer from "./components/footer/Footer";
>>>>>>> master

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainroute />
      <Footer />
      <Login/>
      
    </div>
  );
}

export default App;
