import { MOVIE_ENDPOINT } from './constants';
import { Result, Movie, Offset, MovieFilter, OffsetResult } from './models';
import { callApiWithGet } from './utils';

export * from './models';

export const getMovies = async (offset: Offset, filter?: MovieFilter): Promise<OffsetResult<Movie[]>> => {
  const { data, error } = await callApiWithGet<{ data: Movie[] }>(MOVIE_ENDPOINT.GET_MOVIES, {
    ...offset,
    ...filter,
  });
  return {
    ...data,
    error,
  };
};

export const getMovie = async (id: number): Promise<Result<Movie>> => (
  callApiWithGet<Movie>(`${MOVIE_ENDPOINT.GET_MOVIES}/${id}`)
);
