/* istanbul ignore file */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import * as MoviesData from './movies';
import * as MoviesFilter from './filter';
import * as MovieData from './movie';

import { AppState } from './models';

export const makeRootReducer = (history: History) => combineReducers<AppState>({
  moviesData: MoviesData.reducer,
  moviesFilter: MoviesFilter.reducer,
  movieData: MovieData.reducer,
  router: connectRouter(history),
});
