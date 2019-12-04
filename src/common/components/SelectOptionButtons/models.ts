import { UniqueIdItem } from '../../utils';

export type SelectOption<T extends string | number = string> = {
  title: string;
  value: T;
};

export type SelectOptionButtonProps<T extends string | number = string> = {
  title: string;
  options: UniqueIdItem<SelectOption<T>>[];
  value: T;
  onChange: (value: T) => void;
};
