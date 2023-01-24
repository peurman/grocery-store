import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RouterStateUrl } from './router.reducers';

const selectProductsState = createFeatureSelector<RouterStateUrl>('router');

export const selectUrl = createSelector(
  selectProductsState,
  (state: RouterStateUrl) => state.url
);

export const selectParams = createSelector(
  selectProductsState,
  (state: RouterStateUrl) => state.params
);

export const selectQueryParams = createSelector(
  selectProductsState,
  (state: RouterStateUrl) => state.queryParams
);
