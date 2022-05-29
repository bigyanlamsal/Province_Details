import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './city.css';
import Data from './city.json';
import axios from "axios";


const City = () => {
    const [data,setData]=useState({})
    const[cityVar,setCity]=useState({
        "id": 1,
        "country": "Nepal",
        "province": "Bagmati",
        "province_number": 3,
        "wards": 32,
        "zip": 44600,
        "area": 413.69,
        "population": 14400000,
        "visited": true,
        "hotel": [
          "Samsara Boutique Hotel",
          "The Soaltee Kathmandu",
          "Hotel Yambu",
          "Hotel Jampa",
          "Hotel Yak and Yeti"
        ],
        "attractions": {
          "zoo": true,
          "qfx": true,
          "stadium": ["Shankhadhar Stadium", "Buddha Stadium", "Balaju Stadium"],
          "parks": [
            {
              "id": 1,
              "name": "Sahid Madhan Park",
              "address": "madhan chowk",
              "image": "https://th.bing.com/th/id/R.6f0e2dcc7d02ba496029ea1ee7358629?rik=TEqHD2XS3mOBiw&pid=ImgRaw&r=0"
            },
            {
              "id": 2,
              "name": "balaju park",
              "address": "balaju",
              "image": "https://th.bing.com/th/id/R.6f0e2dcc7d02ba496029ea1ee7358629?rik=TEqHD2XS3mOBiw&pid=ImgRaw&r=0"
            },
            {
              "id": 3,
              "name": "prithivi park",
              "address": "pasupati nagar",
              "image": "https://th.bing.com/th/id/R.6f0e2dcc7d02ba496029ea1ee7358629?rik=TEqHD2XS3mOBiw&pid=ImgRaw&r=0"
            }
          ]
        }
    })
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
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7b31ccd4c0b391c82419ea24f7e45ca9`
          var cityCall=()=>{
          axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })

    }
    cityCall()
    },
    [city]
    );
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
                      <h4>Province No:{cityVar.province_number}</h4>
                </div>
            </div>
            <div className="weatherApi">
                  <div className="time1">
                      <h2>Time:11:11</h2>
                  </div>
                  <div className="temp1">
                  {data.main ? <h2>Temp: {data.main.temp.toFixed()}<sup>o</sup>C</h2> : null}
                  </div>
                  <div className="minTemp">
                  {data.main ? <h2>Min Temp: {data.main.temp_min.toFixed()}<sup>o</sup>C</h2> : null}
                  </div>
                  <div className="feelsLike">
                      {data.weather ? <h2>Situation:{data.weather[0].main}</h2>:null}
                  </div>
            </div>
            <div className="provinceDescription">
                  <div className="countryProvince">
                     <h2>Country:{cityVar.country}</h2>
                     <br/>
                     <h2>Province:{cityVar.province}</h2>
                  </div>
                  <div className="districtProvinceNo">
                  <h2>District:{city}</h2>
                     <br/>
                     <h2>Province_No:{cityVar.province_number}</h2>
                  </div>
                  <div className="zipWards">
                  <h2>Zip_Code:{cityVar.zip}</h2>
                     <br/>
                     <h2>Wards:{cityVar.wards}</h2>
                  </div>
                  <div className="areaPopulation">
                  <h2>Area:{cityVar.area}<sup>2</sup>km</h2>
                     <br/>
                     <h2>Population:{cityVar.population}</h2>
                  </div>
            </div>
            <h1>Major Attractions:</h1>
            <div className="majorAttractions">
                <div className="part-one">
                      <h1>Zoo: {cityVar.attractions.zoo ? "available":"not available"}</h1>
                      <h1>QFX:{cityVar.attractions.qfx ? " available": "not available"}</h1>
                </div>
                <div className="divider">

                </div>
                <div className="part-two">
                      <h1>Stadium</h1>

                      <ul>{cityVar.attractions.stadium.map((stadium,index)=>
                        <li className='comma'>{stadium}<span>{", "}</span></li>)}</ul>
                </div>
            </div>
            <div className="park">
                <h1>Parks</h1>
                <div className="parkImages">
                      { cityVar.attractions.parks.map(parks=>
                        <img src={parks.image} alt='park'></img>)}
                </div>
            </div>
            <div class="form-checkBox">
            <label class="form-check-label" for="flexCheckDefault">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    Checkmark if visited
            </label>
            </div>
        </div>
    )
}
export default City