
import './App.css';

import Home from './components/Home';
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import Navbars from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';

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
     </Routes>
     {/* </Router> */}
    </div>
  );
}

export default App;
