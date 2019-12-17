import * as React from 'react';
import * as enzyme from 'enzyme';

import { MovieCardProps } from '../models';
import { MovieCard } from '..';

describe('[COMPONENTS] [CONTENT] [COMPONENTS] [MOVIE_CARD]', () => {
  test('should render component', () => {
    const fakeProps: MovieCardProps = {
      gengre: 'fakeGengre',
      id: 1,
      imageUrl: 'fakeImageUtr',
      title: 'fakeTitle',
      year: 2019,
    };

    const component = enzyme.shallow(<MovieCard {...fakeProps} />);
    expect(component).toMatchSnapshot();
  });
});
