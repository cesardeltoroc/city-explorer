import React from "react";
import { Accordion } from "react-bootstrap";

class Weatherday extends React.Component {
  render() {
    return (
      <Accordion>
        <Accordion.Item eventKey={this.props.idx} >
          <Accordion.Header>{this.props.weather.date}</Accordion.Header>
          <Accordion.Body>High: {this.props.weather.highTemp}</Accordion.Body>
          <Accordion.Body>Low: {this.props.weather.lowTemp}</Accordion.Body>
          <Accordion.Body>Forecast: {this.props.weather.description}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  }
}
export default Weatherday;
