import * as React from 'react';
import * as enzyme from 'enzyme';

import { MovieInfoComponentProps } from '../models';
import { MovieInfoComponent } from '..';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(() => ({
    id: '1',
  })),
}));

describe('[COMPONENTS] [MOVIE_INFO]', () => {
  test('should render component', () => {
    const fakeProps: MovieInfoComponentProps = {
      movieData: {
        error: null,
        loading: false,
        movie: {
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
        notFound: false,
      },
      selectMovie: jest.fn(),
    };

    const component = enzyme.shallow(<MovieInfoComponent {...fakeProps} />);
    expect(component).toMatchSnapshot();
  });
});
