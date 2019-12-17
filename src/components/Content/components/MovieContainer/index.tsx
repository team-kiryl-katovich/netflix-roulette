import * as React from 'react';

import { Loader } from '@common/components';
import { withMovies } from '@enhancers/withMovies';

import { MovieCard, MoviePagination } from '../';

import { MovieContainerComponentProps } from './models';

import './styles';

const pageSize = 9;

export const MovieContainerComponent = ({
  moviesData: { movies, loading, offset },
  searchMovies,
  moreMovies,
}: MovieContainerComponentProps) => {
  React.useEffect(() => {
    searchMovies({ limit: pageSize });
  }, []);
  if (loading && !movies.length) {
    return <Loader loading={loading} />;
  }
  return (
    <div className="movie-container">
      <MoviePagination
        moviesCount={movies.length}
        loading={loading}
        fetch={moreMovies}
        pageSize={pageSize}
        offset={offset}
      >
        {movies.map((movie) => (
          <MovieCard
            id={movie.id}
            title={movie.title}
            gengre={movie.genres.join(',')}
            year={new Date(movie.release_date).getFullYear()}
            imageUrl={movie.poster_path}
            key={movie.id}
          />
        ))}
      </MoviePagination>
    </div>
  );
};

export const MovieContainer = withMovies(MovieContainerComponent);
