export type Result<T> = {
  data?: T;
  error?: Error;
};

export type Offset = {
  offset?: number;
  limit?: number;
};

export type OffsetResult<T> = Result<T> &
  Offset & {
    total?: number;
  };

export type Movie = {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: string[];
};

export type SortBy = keyof Movie;
export type SortOrder = 'desc' | 'asc';
export type SearchBy = Extract<keyof Movie, 'title' | 'genres'>;

export type MovieFilter = {
  sortBy?: SortBy;
  sortOrder?: SortOrder;
  search?: string;
  searchBy?: SearchBy;
  filter?: string;
};
