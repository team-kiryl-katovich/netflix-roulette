import * as React from 'react';

import { SelectOptionButtons } from '../../common/components';

import './styles';

export const InfoBar = () => (
  <div className="info-bar">
    <div className="info-bar__controls">
      <div className="info-label">7 movie found</div>
      <SelectOptionButtons
        title="Sort by"
        options={['Release date', 'Rating']}
      />
    </div>
  </div>
);
