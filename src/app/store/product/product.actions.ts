import { createAction, props } from '@ngrx/store';

import { ProductInterface } from 'src/app/home/models/products.interface';

export const getProductAction = createAction(
  '[Category] Get Product Action',
  props<{ slug: string }>()
);

export const getProductSuccessAction = createAction(
  '[Category] Get Product Success Action',
  props<{ data: ProductInterface }>()
);
export const getProductErrorAction = createAction(
  '[Category] Get Product Error Action',
  props<{ message: string }>()
);
