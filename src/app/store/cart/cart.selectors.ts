import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CartState } from './cart.state';

const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartData = createSelector(
  selectCartState,
  (state: CartState) => state.cartData?.data
);

export const selectIsLoading = createSelector(
  selectCartState,
  (state: CartState) => state.isLoading
);

export const selectIsError = createSelector(
  selectCartState,
  (state: CartState) => state.isError
);
