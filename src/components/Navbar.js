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
        // console.log('name: ', name, 'value: ', value)
        setCurrentLocation((prevState) => ({ ...prevState, [name]: value }));
    }
    React.useEffect(() => {
        if(currentLocation.city && currentLocation.country){
            fetchWeather();
        }
    }, [currentLocation])
    const fetchWeather = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${currentLocation.city},${currentLocation.country}&units=metric&appid=${apiKey}`)
            .then(response => {
                let temperature = response.data.main;
                let weather = response.data.weather[0];
                let sweaterWeater = Object.assign(temperature, weather);
                setCurrentWeather([sweaterWeater]);
                // let rangeID = sweaterWeater.id;
                // get_WeatherIcon(icons, rangeId) {
                //     switch (true) {
                //       case rangeId >= 200 && rangeId < 232:
                //         this.setState({ icon: icons.Thunderstorm });
                //         break;
                //       case rangeId >= 300 && rangeId <= 321:
                //         this.setState({ icon: icons.Drizzle });
                //         break;
                //       case rangeId >= 500 && rangeId <= 521:
                //         this.setState({ icon: icons.Rain });
                //         break;
                //       case rangeId >= 600 && rangeId <= 622:
                //         this.setState({ icon: icons.Snow });
                //         break;
                //       case rangeId >= 701 && rangeId <= 781:
                //         this.setState({ icon: icons.Atmosphere });
                //         break;
                //       case rangeId === 800:
                //         this.setState({ icon: icons.Clear });
                //         break;
                //       case rangeId >= 801 && rangeId <= 804:
                //         this.setState({ icon: icons.Clouds });
                //         break;
                //       default:
                //         this.setState({ icon: icons.Clouds });
                //     }
                //   }
            })
            .catch((error) => {
                console.error(error.response.data);
              });
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
                        <WeatherTemplate {...details} key={index} cityName={currentLocation.city}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Navbar
