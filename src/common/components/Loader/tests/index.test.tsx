import * as React from 'react';
import * as enzyme from 'enzyme';

import { LoaderProps } from '../models';
import { Loader } from '..';

describe('[COMMON] [COMPONENTS] [LOADER]', () => {
  test('should render component', () => {
    const fakeProps: LoaderProps = {
      loading: true,
    };

    const component = enzyme.shallow(<Loader {...fakeProps} />);
    expect(component).toMatchSnapshot();
  });
});
