import React from 'react';
import { Accordion } from 'react-bootstrap';


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <Accordion>
        {this.props.weatherData.map((element, idx) => (
          <div className='acc' key={idx}>
            <Accordion.Item key={idx} eventKey={idx} >
              <Accordion.Header>{element.date}</Accordion.Header>
              <Accordion.Body>{element.description}</Accordion.Body>
            </Accordion.Item>
          </div>
        ))}
      </Accordion>
    );

  }

}

export default Weather;
