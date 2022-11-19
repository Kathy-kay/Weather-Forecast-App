import { useEffect, useState } from 'react'
import './App.css'
import snow from  './assets/snow.jpg'
import rainyDay from './assets/rainyDay.jpg'
import clearDay from './assets/clearDay.jpg'
import { getFormattedWeatherData } from './Component/weatherService'
import {Descriptions} from './Component/weather'

function App() {
 const [location, setLocation] = useState('')
 const [weather, setWeather] = useState({
  description:'',
  name:'',
  country:'',
  temp:'',
  min_temp:'',
  max_temp:'',
  feels_like:'',
  humidity:'',
  pressure:'',
  speed:''

 })
 
 const handleChange = (e) =>{
  e.preventDefault();
  setLocation(e.target.value)


 }

 const handleSubmit = (e) =>{
  e.preventDefault()
  if(!location )return
  setLocation('')
 }



 useEffect(() =>{
   const fetchWeatherData = async () =>{
    const data = await getFormattedWeatherData('paris');
    setWeather({
      description:data.description,
      name:data.name,
      country:data.country,
      temp:data.temp,
      min_temp:data.temp_min,
      max_temp:data.temp_max,
      feels_like:data.feels_like,
      humidity:data.humidity,
      pressure:data.pressure,
      speed: data.speed
    })
    
   }
   fetchWeatherData()
 },[])


  return (
    <div className="App" style={{backgroundImage:`url(${snow})`}}>
      <div className="overlay">
        <div className="container">
          <form onSubmit={handleSubmit} className="input">
            <input type="text"
            placeholder='Enter Location...'
            value={location}
            onChange={handleChange}
             />
             <button>Search here</button>
          </form>

          {/*temperature section */}
          <div className="temperature-section">
            <div className="icon">
             <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img src="" alt="" />
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h3>{weather.temp}</h3>
            </div>
          </div>


          {/*bottom description */}
          <Descriptions  weather={weather}/>
        </div>
      </div>
    </div>
  )
}

export default App
