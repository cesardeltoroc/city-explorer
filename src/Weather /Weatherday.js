import React from "react";
import { Card } from "react-bootstrap";

class Weatherday extends React.Component {
  render() {
    return (
      <div className="weather">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.props.weather.date}</Card.Title>
            <Card.Text>High: {this.props.weather.highTemp}</Card.Text>
            <Card.Text>High: {this.props.weather.lowTemp}</Card.Text>
            <Card.Text>Description: {this.props.weather.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
export default Weatherday;

