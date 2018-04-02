import React, { Component } from 'react';
import WeatherMain from './weatherComp/WeatherMain'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherMain/>
      </div>
    );
  }
}

export default App;
