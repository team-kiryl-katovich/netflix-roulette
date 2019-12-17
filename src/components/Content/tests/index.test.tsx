import * as React from 'react';
import * as enzyme from 'enzyme';

import { Content } from '..';

describe('[COMPONENTS] [CONTENT]', () => {
  test('should render component', () => {
    const component = enzyme.shallow(<Content />);
    expect(component).toMatchSnapshot();
  });
});
