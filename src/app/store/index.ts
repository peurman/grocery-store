import { LoginEffects } from './login/login.effects';
import { loginReducer } from './login/login.reducer';
import { LoginState } from './login/login.state';

import { CategoriesEffects } from './categories/categories.effects';
import { categoriesReducer } from './categories/categories.reducer';
import { CategoryState } from './categories/categories.state';
import * as fromCategoriesSelectors from './categories/categories.selectors';

import { ProductsEffects } from './products/products.effects';
import { productsReducer } from './products/products.reducer';
import { ProductsState } from './products/products.state';
import * as fromProductsSelectors from './products/products.selectors';

import { ProductEffects } from './product/product.effects';
import { productReducer } from './product/product.reducer';
import { ProductState } from './product/product.state';
import * as fromProductSelectors from './product/product.selectors';

import { CartEffects } from './cart/cart.effects';
import { cartReducer } from './cart/cart.reducer';
import { CartState } from './cart/cart.state';
import * as fromCartSelectors from './cart/cart.selectors';

import { routerReducer } from '@ngrx/router-store';
import { RouterStateUrl } from './router/router.reducers';
import * as fromRouterSelectors from './router/router.selectors';

export interface RootState {
  login: LoginState;
  categories: CategoryState;
  products: ProductsState;
  product: ProductState;
  cart: CartState;
  router: RouterStateUrl;
}

export const appReducer = {
  login: loginReducer,
  categories: categoriesReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  router: routerReducer,
};

export const appEffects = [
  LoginEffects,
  CategoriesEffects,
  ProductsEffects,
  ProductEffects,
  CartEffects,
];
export const appSelectors = [
  fromCategoriesSelectors.selectCategoriesData,
  fromCategoriesSelectors.selectIsError,
  fromCategoriesSelectors.selectIsLoading,
  fromProductsSelectors.selectProductsData,
  fromProductsSelectors.selectIsError,
  fromProductsSelectors.selectIsLoading,
  fromProductSelectors.selectProductData,
  fromProductSelectors.selectIsError,
  fromProductSelectors.selectIsLoading,
  fromCartSelectors.selectCartData,
  fromCartSelectors.selectIsError,
  fromCartSelectors.selectIsLoading,
  fromRouterSelectors.selectUrl,
  fromRouterSelectors.selectParams,
  fromRouterSelectors.selectQueryParams,
];
