import * as React from 'react';
import * as enzyme from 'enzyme';

import { ButtonProps } from '../models';
import { Button } from '..';

describe('[COMMON] [COMPONENTS] [BUTTON]', () => {
  test('should render component', () => {
    const fakeProps: ButtonProps = {
      onClick: jest.fn(),
      title: 'fakeTitle1',
    };
    
    const component = enzyme.shallow(<Button {...fakeProps} />);
    expect(component).toMatchSnapshot();
  });
});
