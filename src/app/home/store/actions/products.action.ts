import { Action } from '@ngrx/store';

import { Product } from '../../models/products.interface';

// load pizzas
export const LOAD_PRODUCTS = '[Products] Load Products';
export const LOAD_PRODUCTS_FAIL = '[Products] Load Products Fail';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load Products Success';

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class LoadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

// action types
export type ProductsAction =
  | LoadProducts
  | LoadProductsFail
  | LoadProductsSuccess;
