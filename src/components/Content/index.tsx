import * as React from 'react';

import { ScaleImage } from '../../common/components';

import './styles';

// TODO: split into movie card and conteiner component with neccessary props

export const Content = () => (
  <div className="content">
    <div className="movie-container">
      {[1, 2, 3, 4, 5].map(index => (
        <div className="movie-card">
          <ScaleImage src={require(`@assets/data/movie-${index}.jpg`)} ratio={140} />
          <div className="movie-card__description">
            <div className="movie-card-title">
              <div className="movie-card-title__title">Pupl Fiction</div>
              <div className="movie-card-title__gengre">{`Action & Adventure`}</div>
            </div>
            <div className="movie-card-year">
              <div className="movie-card-year__label">2004</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
