import { createAction, props } from '@ngrx/store';
import { CategoryInterface } from 'src/app/core/models/category.interface';

export const getCategoriesAction = createAction(
  '[Category] Get Categories Action'
);
export const getCategoriesSuccessAction = createAction(
  '[Category] Get Categories Success Action',
  props<{ data: CategoryInterface }>()
);
export const getCategoriesErrorAction = createAction(
  '[Category] Get Categories Error Action',
  props<{ message: string }>()
);
