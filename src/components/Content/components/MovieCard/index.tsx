import * as React from 'react';

import { ScaleImage, Label } from '../../../../common/components';

import { MovieCardProps } from './models';

import './styles';

export const MovieCard = ({ title, gengre, year, imageUrl }: MovieCardProps) => (
  <div className="movie-card">
    <ScaleImage src={imageUrl} ratio={140} />
    <div className="movie-card__description">
      <div className="movie-card-title">
        <Label className="movie-card-title__title" text={title} />
        <Label className="movie-card-title__gengre" text={gengre} />
      </div>
      <div className="movie-card-year">
        <Label className="movie-card-year__label" text={year.toString()} />
      </div>
    </div>
  </div>
);
