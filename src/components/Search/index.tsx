import * as React from 'react';
import { compose } from 'redux';

import { SearchBy } from '@common/api';
import { Button, Label, Input, SelectOptionButtons } from '@common/components';
import { withMoviesDataHandlers } from '@enhancers/withMovies';
import { withFilter } from '@enhancers/withFilter';

import { SearchComponentProps } from './models';
import { options } from './constants';

import './styles';

const searchSize = 9;

export const SearchComponent = ({ filter, setFilter, searchMovies }: SearchComponentProps) => {
  const [search, setSearch] = React.useState<string>('');
  const [searchBy, setSearchBy] = React.useState<SearchBy>('title');

  const onClickCallback = React.useCallback(() => {
    setFilter({
      search,
      searchBy,
    });
    searchMovies({ limit: searchSize });
  }, [setFilter, filter, search, searchBy]);

  return (
    <div className="search">
      <Label className="search__title" text="Find your movie" uppercase={true} />
      <div className="search__area">
        <div className="search-controls">
          <Input className="search-controls__input" placeholder="Quentin Tarantio" onChange={setSearch} />
          <Button className="search-controls__button" title="Search" onClick={onClickCallback} />
        </div>
      </div>
      <div className="search__filter">
        <SelectOptionButtons<SearchBy> title="Search by" options={options} value={searchBy} onChange={setSearchBy} />
      </div>
    </div>
  );
};

export const Search = compose<React.ComponentType>(withFilter, withMoviesDataHandlers)(SearchComponent);
