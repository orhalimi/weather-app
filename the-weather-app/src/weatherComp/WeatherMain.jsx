import React from 'react'
import WeatherSelector from './WeatherSelector'
import axios from 'axios';

const defaultValue = 'Select a City'
const CITIES = [defaultValue,'Tel Aviv', 'Haifa', 'Ashkelon', 'Eilat', 'Rehovot']
const API_ID ='b9b5c6a68f1c7855568991f170553b0c';

class WeatherMain extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const selectedCity = e.target.value;
    if (selectedCity !== defaultValue){
      const uri = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity},IL&APPID=${API_ID}&units=metric`;
      axios.get(uri)
      .then(res => {
        const weather = res.data.main.temp;
        const weatherIcon = res.data.weather[0].main;
        console.log(weather,weatherIcon);
      });
    }
  }

  render() {
    return <WeatherSelector cities={CITIES} onChange={this.handleChange}/>
  }

}

export default WeatherMain;