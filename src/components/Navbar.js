import React from 'react';
import axios from 'axios';
import WeatherTemplate from './WeatherTemplate';

// API call: http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}

const apiKey = '6c34f050a44b39df328185e4b916581a';



const Navbar = () => {
    const [currentLocation, setCurrentLocation] = React.useState({});
    const [currentWeather, setCurrentWeather] = React.useState([]);
    const handleLocationInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log('name: ', name, 'value: ', value)
        setCurrentLocation((prevState) => ({ ...prevState, [name]: value }));
    }
    React.useEffect(() => {
        if(currentLocation.city && currentLocation.country){
            fetchWeather();
        }
    }, [])
    const fetchWeather = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${currentLocation.city},${currentLocation.country}&units=metric&appid=${apiKey}`)
            .then(response => setCurrentWeather([response.data.main]))
    }
    return (
        <div>
            <p>City:</p>
            <input type='text' name='city' value={currentLocation.city} onChange={handleLocationInput}/>
            <p>Country:</p>
            <input type='text' name='country' value={currentLocation.country} onChange={handleLocationInput}/>
            <button onClick={fetchWeather}>Get Weather</button>
            {currentWeather.map((details, index) => {
                return (
                    <div>
                        <WeatherTemplate {...details} key={index} />
                    </div>
                )
            })}
        </div>
    )
}

export default Navbar
