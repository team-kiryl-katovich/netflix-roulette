import { Offset, MovieFilter } from '@common/api';
import { MoviesDataState } from '@store/movies';

export type WithMoviesDataProps = { moviesData: MoviesDataState };
export type WithMoviesHandlersProps = {
  searchMovies: (offset: Offset, filter?: MovieFilter) => void;
  moreMovies: (offset: Offset) => void;
};

export type WithMoviesProps = WithMoviesDataProps & WithMoviesHandlersProps;
