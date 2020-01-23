import React from 'react';
import './AddEditMovie.css';
import { connect } from 'react-redux';
import { addMovie, editMovie } from '../../actions/actions';

class AddEditMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.myMovie ? props.myMovie.id : '',
      movieName: props.myMovie ? props.myMovie.movieName : '',
      year: props.myMovie ? props.myMovie.year : '',
      img: props.myMovie ? props.myMovie.img : '',
      rating: props.myMovie ? props.myMovie.rating : '',
      description: props.myMovie ? props.myMovie.description : '',
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  emptyFields = () => {
    this.setState({
      id: '',
      movieName: '',
      year: '',
      img: '',
      rating: '',
      description: '',
    });
  };

  render() {
    if (this.props.editAddMovie) {
      return (
        <div className='modal'>
          <h1>MOVIE INFORMATIONS</h1>
          <label>Movie Name</label>
          <input
            name='movieName'
            className='inputs'
            type='text'
            value={this.state.movieName}
            onChange={this.handleChange}
          />
          <label>Release Year</label>
          <input
            name='year'
            className='inputs'
            type='text'
            value={this.state.year}
            onChange={this.handleChange}
          />
          <label>Image Url</label>
          <input
            name='img'
            className='inputs'
            type='text'
            value={this.state.img}
            onChange={this.handleChange}
          />
          <label>Rate (1-5)</label>
          <input
            name='rating'
            className='inputs'
            type='text'
            value={this.state.rating}
            onChange={this.handleChange}
          />
          <label>Description</label>
          <textarea
            name='description'
            className='inputs'
            type='text'
            value={this.state.description}
            onChange={this.handleChange}
          />
          <div>
            <button
              className='btn bg-green'
              onClick={() => {
                if (this.state.id) {
                  this.props.updateMovie(
                    this.state.id,
                    this.state.movieName,
                    this.state.year,
                    this.state.img,
                    this.state.rating,
                    this.state.description
                  );
                } else {
                  this.props.addMovie(
                    this.state.movieName,
                    this.state.year,
                    this.state.img,
                    this.state.rating,
                    this.state.description
                  );
                  this.emptyFields();
                }
                this.props.hideModal();
              }}>
              {this.state.id ? 'Update' : 'Add'}
            </button>
            <button
              className='btn bg-red'
              onClick={() => {
                this.props.hideModal();
              }}>
              Cancel
            </button>
          </div>
        </div>
      );
    }
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  addMovie: (movieName, year, img, rating, description) =>
    dispatch(addMovie(movieName, year, img, rating, description)),
  updateMovie: (id, movieName, year, img, rating, description) =>
    dispatch(editMovie(id, movieName, year, img, rating, description)),
});

export default connect(null, mapDispatchToProps)(AddEditMovie);
