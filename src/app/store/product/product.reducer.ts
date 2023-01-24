import { createReducer, on, Action } from '@ngrx/store';
import * as productActions from './product.actions';
import { ProductState } from './product.state';

export const initialProductState: ProductState = {
  productData: null,
  isLoading: false,
  isError: null,
};

const productReducerInternal = createReducer(
  initialProductState,
  on(productActions.getProductAction, state => {
    return {
      ...state,
      isLoading: true,
      isError: null,
    };
  }),
  on(productActions.getProductSuccessAction, (state, { data }) => {
    return {
      ...state,
      productData: data,
      isLoading: false,
    };
  }),
  on(productActions.getProductErrorAction, (state, { message }) => {
    return {
      ...state,
      isLoading: false,
      isError: message,
    };
  })
);
export function productReducer(
  state: ProductState | undefined,
  action: Action
) {
  return productReducerInternal(state, action);
}
