import * as React from 'react';
import * as enzyme from 'enzyme';

import { Footer } from '..';

describe('[COMPONENTS] [FOOTER]', () => {
  test('should render component', () => {
    const component = enzyme.shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
