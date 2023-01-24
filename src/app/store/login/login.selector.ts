import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LoginState } from './login.state';

const selectLoginState = createFeatureSelector<LoginState>('login');

export const selectLoginData = createSelector(
  selectLoginState,
  (state: LoginState) => state.loginData
);
