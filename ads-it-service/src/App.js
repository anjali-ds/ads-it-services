
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 >ADS IT SERVICE</h1>
   
      {/* <Home/> */}
      <Navbar/>

      {/* <Router> */}
     
     <Routes>
     <Route exact path = "/" element ={ <Home/> }></Route>
     </Routes>
     {/* </Router> */}
    </div>
  );
}

export default App;
