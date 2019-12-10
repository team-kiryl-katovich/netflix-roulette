import * as React from 'react';
import classnames from 'classnames';

import { ButtonProps } from './models';

import './styles';

export const Button = ({ title, onClick, className, type }: ButtonProps) => {
  return (
    <button
      className={classnames('netflix-button', `netflix-button--${type || 'primary'}`, {
        [className]: !!className
      })}
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
