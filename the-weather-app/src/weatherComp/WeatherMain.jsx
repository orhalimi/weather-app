import React from 'react'
import WeatherSelector from './WeatherSelector'
import axios from 'axios';

const defaultValue = 'Select a City'
const CITIES = [defaultValue,'Tel Aviv', 'Haifa', 'Ashkelon', 'Eilat', 'Rehovot']


class WeatherMain extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const selectedCity = e.target.value;
    if (selectedCity !== defaultValue){
      const uri = `http://localhost:8080/weather?city=${selectedCity}`
      axios.get(uri)
      .then(res => {
        const weatherIcon = res.data.weatherIcon;
        const weather = res.data.weather;
        console.log(weatherIcon,weather);
      });
     
    }
  }

  render() {
    return <WeatherSelector cities={CITIES} onChange={this.handleChange}/>
  }

}

export default WeatherMain;



 // const uri = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity},IL&APPID=${API_ID}&units=metric`;
      // axios.get(uri)
      // .then(res => {
      //   const weather = res.data.main.temp;
      //   const weatherIcon = res.data.weather[0].icon;
      //   const weatherIconURL = `http://openweathermap.org/img/w/${weatherIcon}  .png`
      //   console.log(weather,weatherIcon);
      //});