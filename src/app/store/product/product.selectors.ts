import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductState } from './product.state';

const selectProductsState = createFeatureSelector<ProductState>('product');

export const selectProductData = createSelector(
  selectProductsState,
  (state: ProductState) => state.productData?.data
);

export const selectIsLoading = createSelector(
  selectProductsState,
  (state: ProductState) => state.isLoading
);

export const selectIsError = createSelector(
  selectProductsState,
  (state: ProductState) => state.isError
);
