import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { createAction } from 'redux-actions';

import { AppState } from '@store/models';

import { getMovie } from '@common/api';
import { MovieState, MovieFetchState } from './models';

export const ACTION_TYPES = {
  FETCH_MOVIE: 'FETCH_MOIVE',
  FETCH_MOVIE_ERROR: 'FETCH_MOVIE_ERROR',
  RECEIVE_MOVIE_UPDATE: 'RECEIVE_MOVIE_UPDATE',
};

const fetchMovie = createAction<MovieFetchState, MovieFetchState>(ACTION_TYPES.FETCH_MOVIE, (payload) => payload);

const fetchMovieError = createAction<MovieFetchState, MovieFetchState>(
  ACTION_TYPES.FETCH_MOVIE_ERROR,
  (payload) => payload,
);

const receiveMovieUpdate = createAction<MovieState, MovieState>(
  ACTION_TYPES.RECEIVE_MOVIE_UPDATE,
  (payload) => payload,
);

export const actions = {
  fetchMovie,
  fetchMovieError,
  receiveMovieUpdate,
};

const selectMovie = (id: number): ThunkAction<Promise<void>, AppState, {}, AnyAction> => async (dispatch, getState) => {
  dispatch(fetchMovie({ loading: true, error: null, notFound: false }));
  const { moviesData } = getState();
  const movie = moviesData.movies.find((mov) => mov.id === id);
  if (movie) {
    dispatch(receiveMovieUpdate({ movie, loading: false, notFound: false }));
    return;
  }
  const { error, data } = await getMovie(id);
  if (error) {
    dispatch(fetchMovieError({ error, loading: false, notFound: false }));
  } else {
    const notFound = !data || !Object.keys(data).length;
    dispatch(
      receiveMovieUpdate({
        movie: !notFound && data,
        loading: false,
        notFound,
      }),
    );
  }
};

export const thunkActions = {
  selectMovie,
};
