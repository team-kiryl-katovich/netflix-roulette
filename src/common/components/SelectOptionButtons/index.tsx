import * as React from 'react';
import classNames from 'classnames';

import { SelectOptionButtonProps } from './models';

import './styles';

export const SelectOptionButtons = ({
  title,
  options
}: SelectOptionButtonProps) => {
  const [selectedIndex, setIndex] = React.useState(0);
  return (
    <div className="select-option-buttons">
      <div className="select-option-buttons__title">{title}</div>
      {options &&
        options.map((option, index) => (
          <button
            key={`select-option-button-${index}`}
            className={classNames('select-option-buttons__button', {
              ['select-option-buttons__button--active']: index === selectedIndex
            })}
            type="button"
            onClick={() => setIndex(index)}
          >
            {option}
          </button>
        ))}
    </div>
  );
};
