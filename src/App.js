import './App.css';
import Home from './components/Home/home';
import NavBar from './components/NavBar/navBar';
import City from './components/city/city';
import {Routes,Route} from "react-router-dom";
import Form from './components/form/form';
import { useState } from 'react';



function App() {
  const[formData,setFormData]=useState({})

  return (
     <div>
            <NavBar/>
            <Routes>
              <Route path="/:city" element={<City />} />
              <Route path="/" element={<Home/>}/>
              <Route path="/register" element={<Form formData={formData} setFormData={setFormData}/>}/>
            </Routes>
     </div> 
  );
}

export default App;
