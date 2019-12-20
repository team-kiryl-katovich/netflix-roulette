import { uniqueIdItems } from '@common/utils';
import { SelectOption } from '@common/components';
import { SearchBy } from '@common/api';

export const options = uniqueIdItems<SelectOption<SearchBy>>(
  [
    { title: 'Title', value: 'title' },
    { title: 'Gengre', value: 'genres' },
  ],
  'search-by-options',
);
