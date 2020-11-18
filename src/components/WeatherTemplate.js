import React from 'react';

const WeatherTemplate = (props) => {
    const { temp, temp_min, temp_max } = props;
    return (
        <div className='container'>
            <div className='cards'>
                <p>{temp}°</p>
                <p>{temp_min}°</p>
                <p>{temp_max}°</p>
            </div>
        </div>
    )
}

export default WeatherTemplate
