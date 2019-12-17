import * as React from 'react';
import { compose } from 'redux';

import { SortBy } from '@common/api';
import { withMovies } from '@enhancers/withMovies';
import { Label, SelectOptionButtons } from '@common/components';
import { withFilter } from '@enhancers/withFilter';

import { InfoBarComponentProps } from './models';
import { options } from './constatns';

import './styles';

export const InfoBarComponent = ({
  filter,
  setFilter,
  moviesData: { movies },
  searchMovies,
}: InfoBarComponentProps) => {
  const didMountRef = React.useRef(false);
  React.useEffect(() => {
    if (didMountRef.current) {
      searchMovies(
        {
          offset: 0,
          limit: movies.length,
        },
        filter
      );
    } else {
      didMountRef.current = true;
    }
  }, [filter.sortBy]);

  const onChangeCallback = React.useCallback(
    (value: SortBy) => {
      setFilter({ sortBy: value });
    },
    [setFilter]
  );

  return (
    <div className="info-bar">
      <div className="info-bar__controls">
        <Label className="info-label" text={`${movies.length} movies found`} />
        <SelectOptionButtons<SortBy>
          title="Sort by"
          options={options}
          value={filter.sortBy}
          onChange={onChangeCallback}
        />
      </div>
    </div>
  );
};

export const InfoBar = compose<React.ComponentType>(withFilter, withMovies)(InfoBarComponent);
