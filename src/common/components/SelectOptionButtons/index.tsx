import * as React from 'react';
import classNames from 'classnames';

import { Button, Label } from '..';

import { SelectOptionButtonProps } from './models';
export { SelectOption } from './models';

import './styles';

export const SelectOptionButtons = <T extends string | number>({
  title,
  options,
  onChange,
  value,
}: SelectOptionButtonProps<T>) => {
  return (
    <div className="select-option-buttons">
      <Label className="select-option-buttons__title" text={title} uppercase={true} />
      {options.map(({ item, clientId }) => {
        const isSelected = item.value === value;
        return (
          <Button
            className="select-option-buttons__button"
            title={item.title}
            type={isSelected ? 'primary' : 'secondary'}
            onClick={() => {
              if (!isSelected) {
                onChange(item.value);
              }
            }}
            key={clientId}
          />
        );
      })}
    </div>
  );
};
