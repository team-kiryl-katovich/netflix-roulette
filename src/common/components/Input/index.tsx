import * as React from 'react';
import classnames from 'classnames';

import { InputProps } from './models';

import './styles';

export const Input = ({ placeholder, className, onChange }: InputProps) => {
  const onChangeCallback = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.value);
    },
    [onChange]
  );
  return (
    <input
      className={classnames('netflix-input', {
        [className]: !!className,
      })}
      type="text"
      placeholder={placeholder}
      onChange={onChangeCallback}
    ></input>
  );
};
