import { createAction, props } from '@ngrx/store';
import { CartRequestInterface } from 'src/app/cart/models/cart.interface';
import { CartResponseInterface } from 'src/app/cart/models/cart.interface';

export const addCartAction = createAction(
  '[Cart] Add Cart Action',
  props<{ data: CartRequestInterface }>()
);
export const addCartSuccessAction = createAction(
  '[Cart] Add Cart Success Action',
  props<{ data: CartResponseInterface }>()
);
export const addCartErrorAction = createAction(
  '[Cart] Add Cart Error Action',
  props<{ message: string }>()
);
export const getCartAction = createAction('[Cart] Get Cart Action');
export const getCartSuccessAction = createAction(
  '[Cart] Get Cart Success Action',
  props<{ data: CartResponseInterface }>()
);
export const getCartErrorAction = createAction(
  '[Cart] Get Cart Error Action',
  props<{ message: string }>()
);
