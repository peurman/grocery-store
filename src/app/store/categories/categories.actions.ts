import { createAction, props } from '@ngrx/store';
import { CategoryInterface } from 'src/app/core/models/category.interface';

export const getCategoriesAction = createAction(
  '[Category] getCategoriesAction'
);
export const getCategoriesSuccessAction = createAction(
  '[Category] getCategoriesSuccessAction',
  props<{ data: CategoryInterface }>()
);
export const getCategoriesErrorAction = createAction(
  '[Category] getCategoriesErrorAction',
  props<{ message: string }>()
);
