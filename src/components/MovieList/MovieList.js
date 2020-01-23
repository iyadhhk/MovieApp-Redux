import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import AddEditMovie from '../AddEditMovie/AddEditMovie';
import './MovieList.css';

class MovieList extends React.Component {
  state = {
    addingMovie: false,
  };
  handleClick = () => {
    this.setState({ addingMovie: !this.state.addingMovie });
  };

  render() {
    const movies = this.props.movies.filter(
      movie =>
        movie.movieName.toLowerCase().includes(this.props.search) &&
        movie.rating >= this.props.rate
    );

    return (
      <div className='movie_List'>
        {movies.map(e => {
          return <MovieCard hide={this.handleClick} key={e.id} movie={e} />;
        })}
        <div className='newMovie'>
          <button className='addMovie' onClick={this.handleClick}>
            +
          </button>
          <p className='movieName'>Add a New Movie</p>
        </div>
        <AddEditMovie
          hideModal={this.handleClick}
          editAddMovie={this.state.addingMovie}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  movies: state.movieReducer,
  search: state.filterReducer,
  rate: state.starReducer,
});

export default connect(mapStateToProps)(MovieList);
