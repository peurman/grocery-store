import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsState } from './products.state';

const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectProductsData = createSelector(
  selectProductsState,
  (state: ProductsState) => state.productsData?.data
);

export const selectIsLoading = createSelector(
  selectProductsState,
  (state: ProductsState) => state.isLoading
);

export const selectIsError = createSelector(
  selectProductsState,
  (state: ProductsState) => state.isError
);
