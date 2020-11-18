import React from 'react';

const WeatherTemplate = (props) => {
    const { temp, temp_min, temp_max } = props;
    return (
        <div>
            <p>{temp}</p>
            <p>{temp_min}</p>
            <p>{temp_max}</p>
        </div>
    )
}

export default WeatherTemplate
