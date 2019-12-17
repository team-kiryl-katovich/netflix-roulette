import * as React from 'react';
import * as enzyme from 'enzyme';

import { Loader } from '@common/components';

import { MovieContainerComponentProps } from '../models';
import { MovieContainerComponent } from '..';

describe('[COMPONENTS] [CONTENT] [COMPONENTS] [MOVIE_CONTAINER_COMPONENT]', () => {
  const fakeProps: MovieContainerComponentProps = {
    moreMovies: jest.fn(),
    moviesData: {
      error: null,
      loading: false,
      movies: [
        {
          id: 1,
          genres: ['fakeGenre'],
          budget: 1,
          overview: 'fakeOverview',
          poster_path: 'fakePosterPath',
          release_date: '2019-01-01',
          revenue: 1,
          runtime: 1,
          tagline: 'fakeTagline',
          title: 'fakeTitle',
          vote_average: 1,
          vote_count: 1,
        },
      ],
      offset: {
        limit: 1,
        offset: 1,
      },
    },
    searchMovies: jest.fn(),
  };

  test('should render component', () => {
    const component = enzyme.shallow(<MovieContainerComponent {...fakeProps} />);
    expect(component).toMatchSnapshot();
  });

  test('should render loading component', () => {
    const props = {
      ...fakeProps,
      moviesData: {
        ...fakeProps.moviesData,
        loading: true,
        movies: [] as any,
      },
    };

    (props.searchMovies as jest.Mock).mockReset();

    const component = enzyme.mount(<MovieContainerComponent {...props} />);
    const loader = component.find(Loader);
    
    expect(loader.exists()).toBeTruthy();
    expect(props.searchMovies).toHaveBeenCalledTimes(1);
  });
});
