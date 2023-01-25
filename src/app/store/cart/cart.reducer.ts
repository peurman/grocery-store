import { createReducer, on, Action } from '@ngrx/store';
import * as cartActions from './cart.actions';
import { CartState } from './cart.state';

export const initialCartState: CartState = {
  cartData: null,
  isLoading: false,
  isError: null,
};

const cartReducerInternal = createReducer(
  initialCartState,
  on(cartActions.getCartAction, state => {
    return {
      ...state,
      isLoading: true,
      isError: null,
    };
  }),
  on(cartActions.getCartSuccessAction, (state, { data }) => {
    return {
      ...state,
      cartData: data,
      isLoading: false,
    };
  }),
  on(cartActions.getCartErrorAction, (state, { message }) => {
    return {
      ...state,
      isLoading: false,
      isError: message,
    };
  })
);
export function cartReducer(state: CartState | undefined, action: Action) {
  return cartReducerInternal(state, action);
}
