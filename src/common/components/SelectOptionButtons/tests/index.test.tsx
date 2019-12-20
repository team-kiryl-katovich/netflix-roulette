import * as React from 'react';
import * as enzyme from 'enzyme';

import { SelectOptionButtonProps } from '../models';
import { SelectOptionButtons } from '..';

describe('[COMMON] [COMPONENTS] [SELECT_OPTION_BUTTONS]', () => {
  const fakeProps: SelectOptionButtonProps = {
    onChange: jest.fn(),
    options: [
      {
        clientId: '1',
        item: {
          title: 'fakeItemTitle1',
          value: 'fakeItemValue1',
        },
      },
      {
        clientId: '2',
        item: {
          title: 'fakeItemTitle2',
          value: 'fakeItemValue2',
        },
      },
    ],
    title: 'fakeTitle',
    value: 'fakeItemValue1',
  };

  test('should render component', () => {
    const component = enzyme.shallow(<SelectOptionButtons {...fakeProps} />);
    expect(component).toMatchSnapshot();
  });

  test('should change selected item', () => {
    (fakeProps.onChange as jest.Mock).mockReset();
    const component = enzyme.mount(<SelectOptionButtons {...fakeProps} />);

    const button = component.find('button.netflix-button--secondary');
    button.simulate('click');

    expect(fakeProps.onChange).toHaveBeenCalled();
  });

  test('should not change already selected item', () => {
    (fakeProps.onChange as jest.Mock).mockReset();
    const component = enzyme.mount(<SelectOptionButtons {...fakeProps} />);

    const button = component.find('button.netflix-button--primary');
    button.simulate('click');

    expect(fakeProps.onChange).toHaveBeenCalledTimes(0);
  });
});
