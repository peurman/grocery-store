import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromProducts from './products.reducer';

export interface ProductsState {
  products: fromProducts.ProductState;
}

// export const reducers: ActionReducerMap<ProductsState> = {
//   products: fromProducts.reducer,
// };

// export const getProductsState =
//   createFeatureSelector<ProductsState>('products');
