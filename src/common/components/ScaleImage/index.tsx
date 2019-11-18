import * as React from 'react';

import { ScaleImageProps } from './models';

import './styles';

export const ScaleImage = ({ src, width, ratio }: ScaleImageProps) => (
  <div
    className="scale-image"
    style={{
      width: width || '100%',
      paddingTop: `${ratio || 100}%`
    }}
  >
    <img src={src} className="scale-image__image" alt="" />
  </div>
);
