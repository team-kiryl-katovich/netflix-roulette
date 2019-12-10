import { handleActions } from 'redux-actions';

import { ACTION_TYPES } from './actions';
import { MoviesDataState } from './models';

export const initialState: MoviesDataState = {
  error: null,
  loading: false,
  movies: [],
  offset: {
    offset: 0,
    limit: 0,
  },
};

export const reducer = handleActions<MoviesDataState>(
  {
    [ACTION_TYPES.FETCH_MOVIES]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ACTION_TYPES.FETCH_MOVIES_ERROR]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ACTION_TYPES.RECEIVE_MOVIES_UPDATE]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ACTION_TYPES.RECEIVE_MOVIES_ADD]: (state, action) => ({
      ...state,
      ...action.payload,
      movies: [...state.movies, ...action.payload.movies],
    }),
  },
  initialState
);
