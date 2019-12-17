import * as React from 'react';
import * as enzyme from 'enzyme';

import { SearchComponentProps } from '../models';
import { SearchComponent } from '..';

describe('[COMPONENTS] [SEARCH_COMPONENT]', () => {
  const fakeProps: SearchComponentProps = {
    filter: {
      search: 'fakeSearch',
    },
    moreMovies: jest.fn(),
    searchMovies: jest.fn(),
    setFilter: jest.fn(),
  };

  test('should render component', () => {
    const component = enzyme.shallow(<SearchComponent {...fakeProps} />);
    expect(component).toMatchSnapshot();
  });

  test('should start search', () => {
    (fakeProps.setFilter as jest.Mock).mockReset();
    (fakeProps.searchMovies as jest.Mock).mockReset();
    const component = enzyme.mount(<SearchComponent {...fakeProps} />);

    const button = component.find('.search-controls > .search-controls__button');
    button.simulate('click');

    expect(fakeProps.setFilter).toHaveBeenCalledTimes(1);
    expect(fakeProps.searchMovies).toHaveBeenCalledTimes(1);
  });
});
