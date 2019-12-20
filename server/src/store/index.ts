import { Request } from 'express';
import { matchPath } from 'react-router';

import AppStore from '@store/index';
import { thunkActions as MoviesThunkActions } from '@store/movies';
import { thunkActions as MovieThunkActions } from '@store/movie';
import { actions as FilterActions } from '@store/filter';
import { ROUTES, ROUTES_PARAMS } from '@common/routes';

const pageSize = 9;

export const executeAsyncActions = async (store: AppStore, req: Request) => {
  await searchMoviesAction(store, req);
  await selectMovieAction(store, req);
};

const searchMoviesAction = async (store: AppStore, req: Request) => {
  const match = matchPath(req.path, {
    path: `${ROUTES.SEARCH}/:${ROUTES_PARAMS.QUERY}`,
    exact: true,
    strict: true,
  }); 
  if (match && match.isExact) {      
    store.dispatch(
      FilterActions.setFilter({
        search: decodeURIComponent(match.params[ROUTES_PARAMS.QUERY]),
      })
    );
  }
  return await store.thunkDispatch(MoviesThunkActions.searchMovies({ limit: pageSize }));
};

const selectMovieAction = async (store: AppStore, req: Request) => {
  const match = matchPath(req.path, {
    path: `${ROUTES.MOVIE}/:${ROUTES_PARAMS.ID}`,
    exact: true,
    strict: true,
  });  
  if (match && match.isExact) {
    const id = Number(match.params[ROUTES_PARAMS.ID]);
    return await store.thunkDispatch(MovieThunkActions.selectMovie(id));
  }
};
