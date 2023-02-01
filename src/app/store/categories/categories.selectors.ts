import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { RootState } from '..';

import { CategoryState } from './categories.state';

const selectCategoryState = createFeatureSelector<CategoryState>('categories');
// const selectCategoryState = (state: RootState) => state.categories;

export const selectCategoriesData = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.categoriesData?.data
);

export const selectIsLoading = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.isLoading
);

export const selectIsError = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.isError
);
