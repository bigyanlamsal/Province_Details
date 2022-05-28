import './App.css';
import Home from './components/Home/home';
import NavBar from './components/NavBar/navBar';
import City from './components/city/city';
import {Routes,Route,BrowserRouter} from "react-router-dom";


function App() {
  return (
     <div>
            <NavBar/>
            <Routes>
              <Route path="/:city" element={<City />} />
              <Route path="/home" element={<Home/>}/>
            </Routes>
     </div> 
  );
}

export default App;
