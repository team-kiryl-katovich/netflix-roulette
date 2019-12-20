import { RouterState } from 'connected-react-router';

import { MoviesDataState } from './movies';
import { MoviesFilterState } from './filter';
import { MovieDataState } from './movie';

export type AppState = {
  moviesData: MoviesDataState;
  moviesFilter: MoviesFilterState;
  movieData: MovieDataState;
  router: RouterState;
};
