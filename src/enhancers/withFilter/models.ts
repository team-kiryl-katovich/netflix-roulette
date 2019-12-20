import { MoviesFilterState } from '@store/filter';
import { MovieFilter } from '@common/api';

export type WithFilterDataProps = {
  filter: MoviesFilterState;
};

export type WithFilterHandlersProps = {
  setFilter: (filter: MovieFilter) => void;
};

export type WithFilterProps = WithFilterDataProps & WithFilterHandlersProps;
