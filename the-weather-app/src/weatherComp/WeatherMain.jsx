import React from 'react';
import WeatherSelector from './WeatherSelector';
import WeatherInfo from './weatherInfo';
import axios from 'axios';

const defaultValue = 'Select a City'
const CITIES = [defaultValue,'Tel Aviv', 'Haifa', 'Ashkelon', 'Eilat', 'Rehovot']
const API_ID = 'b9b5c6a68f1c7855568991f170553b0c';

class WeatherMain extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      weatherData:''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const selectedCity = e.target.value;
    if (selectedCity !== defaultValue){
      const uri = 
      `https://2rg5jl5m23.execute-api.us-west-2.amazonaws.com/orTest/orExam?city=${selectedCity}&apiKey=${API_ID}`;
      axios.get(uri)
      .then(res => {
        const weatherIcon = `http://openweathermap.org/img/w/${res.data.weatherIcon}.png`;
        const weather = res.data.weather;
        this.setState({
          weatherData:{
            city:selectedCity, weather, weatherIcon}
        });
      });
     
    }
  }

  render() {
    return (
    <div class="margin-top">
      <WeatherSelector cities={CITIES} onChange={this.handleChange} className="row"/>
      <div class="w-100"></div>
      <WeatherInfo weatherData={this.state.weatherData} className="row margin-top"/>
    </div>
    );
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