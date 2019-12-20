import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { createAction } from 'redux-actions';

import { AppState } from '@store/models';
import { Offset, MovieFilter, getMovies } from '@common/api';

import { MoviesState, MoviesFetchState } from './models';

export const ACTION_TYPES = {
  FETCH_MOVIES: 'FETCH_MOIVES',
  FETCH_MOVIES_ERROR: 'FETCH_MOVIES_ERROR',
  RECEIVE_MOVIES_UPDATE: 'RECEIVE_MOVIES_UPDATE',
  RECEIVE_MOVIES_ADD: 'RECEIVE_ADD_MOVIES_ADD',
};

const fetchMovies = createAction<MoviesFetchState, MoviesFetchState>(ACTION_TYPES.FETCH_MOVIES, (payload) => payload);

const fetchMoviesError = createAction<MoviesFetchState, MoviesFetchState>(
  ACTION_TYPES.FETCH_MOVIES_ERROR,
  (payload) => payload
);

const receiveMoviesUpdate = createAction<MoviesState, MoviesState>(
  ACTION_TYPES.RECEIVE_MOVIES_UPDATE,
  (payload) => payload
);

const receiveMoviesAdd = createAction<MoviesState, MoviesState>(ACTION_TYPES.RECEIVE_MOVIES_ADD, (payload) => payload);

export const actions = {
  fetchMovies,
  fetchMoviesError,
  receiveMoviesUpdate,
  receiveMoviesAdd,
};

const searchMovies = (
  offset: Offset,
  filter?: MovieFilter
): ThunkAction<Promise<void>, AppState, {}, AnyAction> => async (dispatch, getState) => {
  dispatch(fetchMovies({ loading: true, error: null, movies: [] }));
  const { moviesFilter } = getState();  
  const { error, data, total, offset: cursor } = await getMovies(offset, filter || moviesFilter);  
  if (!!error) {    
    dispatch(fetchMoviesError({ loading: false, error }));
  } else {
    dispatch(
      receiveMoviesUpdate({
        loading: false,
        movies: data,
        offset: {
          offset: cursor,
          limit: total,
        },
      })
    );
  }
};

const moreMovies = (offset: Offset): ThunkAction<Promise<void>, AppState, {}, AnyAction> => async (
  dispatch,
  getSate
) => {
  dispatch(fetchMovies({ loading: true, error: null }));
  const { moviesFilter } = getSate();
  const { error, data, total, offset: cursor } = await getMovies(offset, moviesFilter);
  if (!!error) {
    dispatch(fetchMoviesError({ loading: false, error }));
  } else {
    dispatch(
      receiveMoviesAdd({
        loading: false,
        movies: data,
        offset: {
          offset: cursor,
          limit: total,
        },
      })
    );
  }
};

export const thunkActions = {
  searchMovies,
  moreMovies,
};
