import React from 'react';

const WeatherInfo = props => {
  if (props.weatherData){
    console.log(props.weatherData.weatherIcon);
    return (
      <div className={props.className}>
        <div className='col-2'/>
        <h3 className='col-3 align-middle'>
        <span className='bold'>CITY: </span>{`${props.weatherData.city}`}
        </h3>
       
          <h3 className='col-3 align-middle'>
           <span className='bold'>TEMP: </span>{`${props.weatherData.weather} C`}
          </h3>
          

        <div className="col-2">
        <img src={props.weatherData.weatherIcon} className='weather-image'/>
        </div>
      </div>
    );

  } else {
    return '';
  }
}

export default WeatherInfo;