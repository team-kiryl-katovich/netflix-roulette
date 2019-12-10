import { Movie, Offset } from '@common/api';

export type MoviePaginationProps = {
  moviesCount: number;
  offset: Offset;
  pageSize: number;
  loading: boolean;
  children?: React.ReactNode;
  fetch: (offset: Offset) => void;
};

export type MoviePaginationState = {};
