
const API_KEY = '319473231600d3b8ffb5f7e98df15d87';

const getFormattedWeatherData = async(city) =>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=${API_KEY}`
    
    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data)
   

    const {
        weather, 
        main: { temp, temp_min, temp_max,feels_like, pressure, humidity},
        wind:{speed},
        sys: {country},
        name
    } = data
    const {description } = weather[0]

    return{
        description,
        weather,
        temp,
        temp_min,
        temp_max,
        feels_like,
        pressure,
        humidity,
        speed,
        country,
        name
    }
}

export {getFormattedWeatherData}