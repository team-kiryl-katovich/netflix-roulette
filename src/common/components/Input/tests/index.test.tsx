import * as React from 'react';
import * as enzyme from 'enzyme';

import { InputProps } from '../models';
import { Input } from '..';

describe('[COMMON] [COMPONENTS] [INPUT]', () => {
  test('should render component', () => {
    const fakeProps: InputProps = {
      onChange: jest.fn(),
    };

    const component = enzyme.shallow(<Input {...fakeProps} />);
    expect(component).toMatchSnapshot();
  });
});
