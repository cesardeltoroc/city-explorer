import React from 'react';
import { Accordion } from 'react-bootstrap';


class Weather extends React.Component {

  render() {
    return (
      <Accordion>
        {this.props.weatherData.map((weather, idx) => (
          <div className='acc' key={idx}>
            <Accordion.Item  eventKey={idx} >
              <Accordion.Header>{weather.date}</Accordion.Header>
              <Accordion.Body>High: {weather.highTemp}</Accordion.Body>
              <Accordion.Body>Low: {weather.lowTemp}</Accordion.Body>
              <Accordion.Body>Forecast: {weather.description}</Accordion.Body>
            </Accordion.Item>
          </div>
        ))}
      </Accordion>
    );

  }

}

export default Weather;
