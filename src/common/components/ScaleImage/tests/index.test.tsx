import * as React from 'react';
import * as enzyme from 'enzyme';

import { ScaleImageProps } from '../models';
import { ScaleImage } from '..';

describe('[COMMON] [COMPONENTS] [SCALE_IMAGE]', () => {
  test('should render component', () => {
    const fakeProps: ScaleImageProps = {
      src: 'fakeSrc',
    };

    const component = enzyme.shallow(<ScaleImage {...fakeProps} />);
    expect(component).toMatchSnapshot();
  });
});
