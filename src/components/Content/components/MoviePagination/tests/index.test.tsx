import * as React from 'react';
import * as enzyme from 'enzyme';

import { MoviePaginationProps } from '../models';
import { MoviePagination } from '..';

describe('[COMPONENTS] [CONTENT] [COMPONENTS] [MOVIE_PAGINATION]', () => {
  const fakeProps: MoviePaginationProps = {
    fetch: jest.fn(),
    loading: false,
    moviesCount: 0,
    offset: {
      limit: 1,
      offset: 1,
    },
    pageSize: 1,
  };

  test('should render component', () => {
    const component = enzyme.shallow(
      <MoviePagination {...fakeProps}>
        <div>fake children</div>
      </MoviePagination>
    );
    expect(component).toMatchSnapshot();
  });

  test('should scroll and unmount', () => {
    (fakeProps.fetch as jest.Mock).mockReset();
    const component = enzyme.mount(
      <MoviePagination {...fakeProps}>
        <div>fake children</div>
      </MoviePagination>
    );

    window.dispatchEvent(new window.UIEvent('scroll'));
    component.unmount();

    expect(fakeProps.fetch).toHaveBeenCalled();
  });
});
