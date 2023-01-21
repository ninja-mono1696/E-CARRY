import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Mainroute from "./routes/Mainroute";
import Footer from "./components/footer/Footer";

import Log from "./components/login/Log";
import {SimpleSidebar} from "./pages/accountPage/Account";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Mainroute />
      {/* <Footer /> */}
   
      {/* <Log/> */}
      {/* <SimpleSidebar/> */}
      
    </div>
  );
}

export default App;
