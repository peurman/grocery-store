import { createAction, props } from '@ngrx/store';
import { ProductsInterface } from 'src/app/home/models/products.interface';

export const getAllProductsAction = createAction(
  '[Products] getAllProductsAction'
);
export const getAllProductsSuccessAction = createAction(
  '[Products] getAllProductsSuccessAction',
  props<{ data: ProductsInterface }>()
);
export const getAllProductsErrorAction = createAction(
  '[Products] getAllProductsErrorAction',
  props<{ message: string }>()
);
export const getProductsByCategoryAction = createAction(
  '[Products] getProductsByCategoryAction',
  props<{ id: number }>()
);
export const getProductsByCategorySuccessAction = createAction(
  '[Products] getProductsByCategorySuccessAction',
  props<{ data: ProductsInterface }>()
);
export const getProductsByCategoryErrorAction = createAction(
  '[Products] getProductsByCategoryErrorAction',
  props<{ message: string }>()
);
