import { LoginEffects } from './login/login.effects';
import { loginReducer } from './login/login.reducer';
import { LoginState } from './login/login.state';
import { CategoriesEffects } from './categories/categories.effects';
import { categoriesReducer } from './categories/categories.reducer';
import { CategoryState } from './categories/categories.state';
import * as fromCategoriesSelectors from './categories/categories.selectors';
// import { HomeEffects } from './home/home.effects';
// import { homeReducer } from './home/home.reducer';
// import { HomeState } from './home/home.state';

export interface RootState {
  login: LoginState;
  categories: CategoryState;
  // home: HomeState;
}

export const appReducer = {
  login: loginReducer,
  categories: categoriesReducer,
  // home: homeReducer,
};

export const appEffects = [
  LoginEffects,
  CategoriesEffects,
  // HomeEffects
];
export const appSelectors = [
  fromCategoriesSelectors.selectCategoriesData,
  fromCategoriesSelectors.selectIsError,
  fromCategoriesSelectors.selectIsLoading,
];
