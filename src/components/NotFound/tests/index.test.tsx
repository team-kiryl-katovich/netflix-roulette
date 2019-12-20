import * as React from 'react';
import * as enzyme from 'enzyme';

import { NotFound } from '..';

describe('[COMPONENTS] [NOT_FOUND]', () => {
  test('should render component', () => {
    const component = enzyme.shallow(<NotFound />);
    expect(component).toMatchSnapshot();
  });
});
