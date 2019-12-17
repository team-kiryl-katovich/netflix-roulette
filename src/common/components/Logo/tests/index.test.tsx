import * as React from 'react';
import * as enzyme from 'enzyme';

import { Logo } from '..';

describe('[COMMON] [COMPONENTS] [LOGO]', () => {
  test('should render component', () => {
    const component = enzyme.shallow(<Logo />);
    expect(component).toMatchSnapshot();
  });
});
