import { createReducer, on, Action } from '@ngrx/store';
import * as productsActions from './products.actions';
import { ProductsState } from './products.state';

export const initialProductsState: ProductsState = {
  productsData: null,
  isLoading: false,
  isError: null,
};

const productsReducerInternal = createReducer(
  initialProductsState,
  on(productsActions.getAllProductsAction, state => {
    return {
      ...state,
      isLoading: true,
      isError: null,
    };
  }),
  on(productsActions.getAllProductsSuccessAction, (state, { data }) => {
    return {
      ...state,
      productsData: data,
      isLoading: false,
    };
  }),
  on(productsActions.getAllProductsErrorAction, (state, { message }) => {
    return {
      ...state,
      isLoading: false,
      isError: message,
    };
  }),
  on(productsActions.getProductsByCategoryAction, state => {
    return {
      ...state,
      isLoading: true,
      isError: null,
    };
  }),
  on(productsActions.getProductsByCategorySuccessAction, (state, { data }) => {
    return {
      ...state,
      productsData: data,
      isLoading: false,
    };
  }),
  on(productsActions.getProductsByCategoryErrorAction, (state, { message }) => {
    return {
      ...state,
      isLoading: false,
      isError: message,
    };
  })
);
export function productsReducer(
  state: ProductsState | undefined,
  action: Action
) {
  return productsReducerInternal(state, action);
}
