import * as React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ScaleImage, Label, Loader } from '@common/components';
import { ROUTES } from '@common/routes';
import { withMovie } from '@enhancers/withMovie';

import { MovieInfoComponentProps } from './models';

import './styles';

export const MovieInfoComponent = ({
  movieData: { movie, loading, notFound },
  selectMovie,
}: MovieInfoComponentProps) => {
  const { id } = useParams();
  React.useEffect(() => {
    selectMovie(Number(id));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [id]);

  if (loading) {
    return <Loader loading={loading} />;
  }

  if (notFound) {
    return <Redirect to={ROUTES.PAGE_404} />;
  }

  if (!movie) {
    return null;
  }

  return (
    <div className="movie-info">
      <Link className="movie-info__search-link" to={ROUTES.HOME}>
        <FontAwesomeIcon icon="search" flip="horizontal" />
      </Link>
      <div className="movie-info__image">
        <ScaleImage src={movie.poster_path} ratio={140} />
      </div>
      <div className="movie-info__content">
        <div className="movie-info-header">
          <Label className="movie-info-header__title" text={movie.title} uppercase />
          <Label className="movie-info-header__rating" text={movie.vote_average} />
        </div>
        <Label className="movie-info-subtitle" text={movie.tagline} />
        <div className="movie-info-time">
          <div className="movie-info-time__year">
            <Label
              className="movie-info-time-label"
              text={new Date(movie.release_date).getFullYear()}
              uppercase
            />
            <Label className="movie-info-time-sublabel" text="year" />
          </div>
          {movie.runtime && (
            <div className="movie-info-time__duration">
              <Label className="movie-info-time-label" text={movie.runtime} />
              <Label className="movie-info-time-sublabel" text="min" />
            </div>
          )}
        </div>
        <Label className="movie-info-description" text={movie.overview} />
      </div>
    </div>
  );
};

export const MovieInfo = withMovie(MovieInfoComponent);
