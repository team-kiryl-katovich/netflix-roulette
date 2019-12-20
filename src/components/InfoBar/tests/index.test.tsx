import * as React from 'react';
import * as enzyme from 'enzyme';

import { InfoBarComponentProps } from '../models';
import { InfoBarComponent } from '..';

describe('[COMPONENTS] [INFO_BAR_COMPONENT]', () => {
  const fakeProps: InfoBarComponentProps = {
    filter: {
      search: 'fakeSearch',
      sortBy: 'release_date',
    },
    moreMovies: jest.fn(),
    moviesData: {
      error: null,
      loading: false,
      movies: [],
      offset: {
        limit: 1,
        offset: 1,
      },
    },
    searchMovies: jest.fn(),
    setFilter: jest.fn(),
  };

  test('should render component', () => {
    const component = enzyme.shallow(<InfoBarComponent {...fakeProps} />);
    expect(component).toMatchSnapshot();
  });

  test('should sort change', () => {
    (fakeProps.setFilter as jest.Mock).mockReset();
    (fakeProps.searchMovies as jest.Mock).mockReset();
    const component = enzyme.mount(<InfoBarComponent {...fakeProps} />);

    const button = component.find('button.netflix-button--secondary');
    button.simulate('click');
    expect(fakeProps.setFilter).toHaveBeenCalledTimes(1);

    component.setProps({
      filter: {
        ...fakeProps.filter,
        sortBy: 'rating',
      },
    });
    expect(fakeProps.searchMovies).toHaveBeenCalledTimes(1);
  });
});
