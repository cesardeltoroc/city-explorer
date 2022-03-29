import React from 'react';
import Weatherday from './Weatherday';

class Weather extends React.Component {

  render() {
    return (
        this.props.weatherData.map((weather, idx) => (
          <Weatherday 
          weather={weather}
          idx={idx}
        />
        ))
    );
  }
}

export default Weather;
