import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './city.css';
import Data from './city.json';

const City = () => {
    const [data,setData]=useState({})
    const[cityVar,setCity]=useState({})
    let{city}=useParams()
    useEffect(()=>{
        switch(city){
            case "kathmandu":
                setCity(Data.kathmandu)
                break
            case "bhaktapur":
                setCity(Data.bhaktapur)
                break
            case "ilam":
                setCity(Data.illam)
                break
            case "sikkim":
                setCity(Data.Sikim)
                break
            default :
                setCity({}) 
                    
        }
    },[city])
    return(
        <div className='mainContainer'>
            <div className="top">
                <div className="province">
                     <h4>Province:{cityVar.province}</h4>
                </div>
                <div className="district">
                      <h4>District:{city}</h4>
                </div>
                <div className="country">
                      <h4>Country:{cityVar.country}</h4>
                </div>
                <div className="provinceNo">
                      <h4>Province No:3</h4>
                </div>
            </div>
            <div className="weatherApi">
                  <div className="time1">
                      <h2>Time:11:12</h2>
                  </div>
                  <div className="temp1">
                      <h2>Temp:20C</h2>
                  </div>
                  <div className="minTemp">
                       <h2>Min Temp:13C</h2>
                  </div>
                  <div className="feelsLike">
                       <h2>Feels Like:Cloudy</h2>
                  </div>
            </div>
            <div className="provinceDescription">
                  <div className="countryProvince">
                     <h2>Country:Nepal</h2>
                     <br/>
                     <h2>Province:Bagmati</h2>
                  </div>
                  <div className="districtProvinceNo">
                  <h2>District:Kathmandu</h2>
                     <br/>
                     <h2>Province_No:3</h2>
                  </div>
                  <div className="zipWards">
                  <h2>Zip_Code:460000</h2>
                     <br/>
                     <h2>Wards:32</h2>
                  </div>
                  <div className="areaPopulation">
                  <h2>Area:12sq.m</h2>
                     <br/>
                     <h2>Population:15,00,000</h2>
                  </div>
            </div>
            <h1>Major Attractions:</h1>
            <div className="majorAttractions">
                <div className="part-one">
                      <h1>Zoo: Available</h1>
                      <h1>QFX:Available</h1>
                </div>
                <div className="divider">

                </div>
                <div className="part-two">
                      <h1>Stadium</h1>
                </div>
            </div>
            <div className="park">
                <h1>Parks</h1>
                <div className="parkImages">
                      
                </div>
            </div>
            <div class="form-check">
            <label class="form-check-label" for="flexCheckDefault">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    Checkmark if visited
            </label>
            </div>
        </div>
    )
}
export default City