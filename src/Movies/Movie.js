import React from "react";
import { Card } from "react-bootstrap";

class Movie extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img src={this.props.movie.img} />
        <Card.Body>
          <Card.Title>Movie Title: {this.props.movie.title}</Card.Title>
          <Card.Text>Release Date: {this.props.movie.release_date}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}
export default Movie;

