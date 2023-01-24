import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CategoryState } from './categories.state';

const selectCategoryState = createFeatureSelector<CategoryState>('categories');

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
