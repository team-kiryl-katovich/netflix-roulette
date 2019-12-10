import * as React from 'react';
import classnames from 'classnames';

import { LabelProps } from './models';

import './styles';

export const Label = ({ text, className, uppercase }: LabelProps) => (
  <div
    className={classnames('netflix-label', {
      [className]: !!className,
      ['netflix-label--uppercase']: uppercase
    })}
  >
    {text}
  </div>
);
