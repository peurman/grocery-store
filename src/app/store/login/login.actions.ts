import { createAction, props } from '@ngrx/store';
import { LoginRequestInterface } from 'src/app/login/models/login.interface';
import { LoginResponseInterface } from 'src/app/login/models/login.interface';

export const loginAction = createAction(
  '[Login] Login Action',
  props<{ data: LoginRequestInterface }>()
);
export const loginSuccessAction = createAction(
  '[Login] Login Success Action',
  props<{ data: LoginResponseInterface }>()
);
export const loginErrorAction = createAction(
  '[Login] Login Error Action',
  props<{ message: string }>()
);
export const logoutAction = createAction('[Login] Logout');
