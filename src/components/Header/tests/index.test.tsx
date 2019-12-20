import * as React from 'react';
import * as enzyme from 'enzyme';

import { Header } from '..';

describe('[COMPONENTS] [HEADER]', () => {
  test('should render component', () => {
    const component = enzyme.shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
