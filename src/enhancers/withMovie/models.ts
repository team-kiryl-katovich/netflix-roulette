import { MovieDataState } from '@store/movie';

export type WithMovieDataProps = { movieData: MovieDataState };
export type WithMovieHandlersProps = {
  selectMovie: (id: number) => void;
};

export type WithMovieProps = WithMovieDataProps & WithMovieHandlersProps;
