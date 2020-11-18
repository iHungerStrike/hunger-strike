import React from 'react';

// API call: http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}

const apiKey = '6c34f050a44b39df328185e4b916581a';



const Navbar = () => {
    const [currentWeather, setCurrentWeather] = React.useState({});
    const handleLocationInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log('name: ', name, 'value: ', value)
        setCurrentWeather((prevState) => ({ ...prevState, [name]: value }));
    }
    React.useEffect(() => {
        
    })
    return (
        <div>
            <p>City:</p>
            <input type='text' name='city' value={currentWeather.city} onChange={handleLocationInput}/>
            <p>Country:</p>
            <input type='text' name='country' value={currentWeather.country} onChange={handleLocationInput}/>
        </div>
    )
}

export default Navbar
