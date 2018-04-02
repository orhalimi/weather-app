import React from 'react';

const WeatherInfo = props => {
  if (props.weatherData){
    console.log(props.weatherData.weatherIcon);
    return (
      <div>
        {`city: ${props.weatherData.city} temperature: ${props.weatherData.weather} C`}
        <img src={props.weatherData.weatherIcon}/>
      </div>
    );

  } else {
    return '';
  }
}

export default WeatherInfo;