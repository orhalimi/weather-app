import React, { Component } from 'react';
import WeatherMain from './weatherComp/WeatherMain'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1 className="text-center title bold">Weather app</h1>
        <WeatherMain/>
      </div>
    );
  }
}

export default App;
