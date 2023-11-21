
import './App.css';


import Home from './components/Home';
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import Navbars from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <h1 >ADS IT SERVICE</h1> */}
   
      {/* <Home/> */}
      <Navbars/>

      {/* <Router> */}
     
     <Routes>
     <Route exact path = "/" element ={ <Home/> }></Route>
     <Route exact path = "/about" element ={ <About/> }></Route>
     <Route exact path = "/service" element ={ <Service/> }></Route>
     <Route exact path = "/contact" element ={ <Contact/> }></Route>
     </Routes>
     {/* </Router> */}
     <Footer/>
    </div>
  );
}

export default App;
