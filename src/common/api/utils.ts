import fetch from 'isomorphic-fetch';

import { MOVIE_ENDPOINT } from './constants';
import { Result } from './models';

const getEndpoint = (endpointKey: string, params?: string): string => {
  const endpoint = `${MOVIE_ENDPOINT.BASE_ENDPOINT}${endpointKey}`;
  return params ? `${endpoint}?${params}` : endpoint;
};

const queryParams = (params: { [key: string]: string | number }): string => {
  if (!params) {
    return '';
  }
  return Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
};

export const callApiWithGet = async <TData>(
  endpointKey: string,
  params?: { [key: string]: string | number },
): Promise<Result<TData>> => {
  try {
    const response = await fetch(`${getEndpoint(endpointKey, queryParams(params))}`);
    const data = await response.json();
    return { data };
  } catch (e) {
    return { error: e };
  }
};
