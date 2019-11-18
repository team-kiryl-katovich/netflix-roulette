import * as React from 'react';

import { SelectOptionButtons } from '../../common/components';

import './styles';

// TODO: split into label, button and etc simple components

export const Search = () => {
  const [toggle, setToggle] = React.useState(false);
  if (toggle) {
    throw new Error('Search is not implemented');
  }
  return (
    <div className="search">
      <div className="search__title">Find your movie</div>
      <div className="search__area">
        <div className="search-controls">
          <input className="search-controls__input" type="text" placeholder="Quentin Tarantio"></input>
          <button className="search-controls__button" type="button" onClick={() => setToggle(true)}>
            Search
          </button>
        </div>
      </div>
      <div className="search__filter">
        <SelectOptionButtons title="Search by" options={['Title', 'Gengre']} />
      </div>
    </div>
  );
};
