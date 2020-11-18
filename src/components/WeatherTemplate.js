import React from 'react';

const WeatherTemplate = (props) => {
    const { temp, temp_min, temp_max, cityName, description, id } = props;
    return (
        <div className='container'>
            <div className='cards'>
                <h1>{cityName}</h1>
                <h5 className='py-4'>
                    Weather Icon
                </h5>
                <h1 className='py-2'>{temp}&deg;</h1>
                <h3>
                    <span className='px-4'>{temp_min}&deg;</span>
                    <span className='px-4'>{temp_max}&deg;</span>
                </h3>
                <h4 className='py-3'>{description.charAt(0).toUpperCase() + description.slice(1)}</h4>
                <h1>Background Image ID: {id}</h1>
            </div>
        </div>
    )
}

export default WeatherTemplate
