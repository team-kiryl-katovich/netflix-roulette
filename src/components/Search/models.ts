import { WithMoviesHandlersProps } from '@enhancers/withMovies';
import { WithFilterProps } from '@enhancers/withFilter';

export type SearchComponentProps = WithFilterProps & WithMoviesHandlersProps;
