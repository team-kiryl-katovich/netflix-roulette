import { uniqueIdItems } from '@common/utils';
import { SelectOption } from '@common/components';
import { SortBy } from '@common/api';

export const options = uniqueIdItems<SelectOption<SortBy>>(
  [
    { title: 'Release date', value: 'release_date' },
    { title: 'Rating', value: 'vote_average' },
  ],
  'sort-options',
);
