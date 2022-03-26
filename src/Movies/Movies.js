import React from 'react';
import './movie.css';
import Movie from './Movie'


class Movies extends React.Component {

  render() {
    return (
        this.props.movieData.map((movie, idx) => (
          <Movie 
          movie={movie}
          idx={idx}
        />
        ))
    );
  }
}

export default Movies;
