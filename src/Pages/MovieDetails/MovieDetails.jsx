import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './MovieDetails.css';

class MovieDetails extends Component {
  state = {
    id: this.props.match.params.movie_id,
  };

  render() {
    const myTab = this.props.movies.filter(e => e.id === Number(this.state.id));

    if (myTab.length === 0) {
      return <Redirect to='/' />;
    } else {
      const { movieName, year, img, rating, description } = myTab[0];
      return (
        <div className='details'>
          <img src={img} alt='' />
          <div className='movie-details'>
            <p>
              <span>Movie Name:</span> {movieName}
            </p>
            <p>
              <span>Release Year:</span> {year}
            </p>
            <p>
              <span>Rating:</span>
              <span style={{ color: 'gold' }}>{rating}★</span>
            </p>
            <p>
              <span>Description:</span> {description}
            </p>
          </div>
        </div>
      );
    }
  }
}
const mapState = state => ({
  movies: state.movieReducer,
});
export default connect(mapState)(MovieDetails);
