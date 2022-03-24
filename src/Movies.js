import React from 'react';
import { Card } from 'react-bootstrap';


class Movies extends React.Component {

  render() {
    return (
      <Card>
        {this.props.movieData.map((element, idx) => (
          <>
            <Card.Img variant="top" src={element.img} />
            <Card.Body>
              <Card.Title>Movie Title: {element.title}</Card.Title>
              <Card.Text>Release Date: {element.release_date}</Card.Text>
            </Card.Body>       
          </>
        ))}
      </Card>
    );

  }

}

export default Movies;
