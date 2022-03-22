import React from 'react';
import { Accordion } from 'react-bootstrap';

class Weather extends React.Component {

  render() {
    return (
      <div className="Weather" >
        <Accordion>
          <Accordion.Item eventKey="0" >
            <Accordion.Header>Day #1</Accordion.Header>
            <Accordion.Body> Insert Weather Here</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Day  #2</Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}

export default Weather;
