import {
  SEARCH_MOVIE,
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  SEARCH_STAR,
} from './constant';

export const searchMovie = movie => ({
  type: SEARCH_MOVIE,
  payload: movie,
});
export const searchStar = rate => ({
  type: SEARCH_STAR,
  payload: rate,
});

export const addMovie = (movieName, year, img, rating, description) => ({
  type: ADD_MOVIE,
  payload: { id: Date.now(), movieName, year, img, rating, description },
});
export const editMovie = (id, movieName, year, img, rating, description) => ({
  type: EDIT_MOVIE,
  payload: { id, movieName, year, img, rating, description },
});
export const deleteMovie = movieId => ({
  type: DELETE_MOVIE,
  payload: movieId,
});
