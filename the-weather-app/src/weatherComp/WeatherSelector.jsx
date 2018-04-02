import React from 'react';


const WeatherSelector = props => (
      <select onChange={props.onChange} className={props.className}>
        {props.cities.map(city => ( <option key={city} value={city}>{city}</option>))}
      </select>
)

export default WeatherSelector;