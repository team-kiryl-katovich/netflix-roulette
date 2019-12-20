import * as React from 'react';
import * as enzyme from 'enzyme';

import { LabelProps } from '../models';
import { Label } from '..';

describe('[COMMON] [COMPONENTS] [LABEL]', () => {
  test('should render component', () => {
    const fakeProps: LabelProps = {
      text: 'fakeText',
    };

    const component = enzyme.shallow(<Label {...fakeProps} />);
    expect(component).toMatchSnapshot();
  });
});
