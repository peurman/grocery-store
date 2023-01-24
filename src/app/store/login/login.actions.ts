import { createAction, props } from '@ngrx/store';
import { LoginRequestInterface } from 'src/app/login/models/login.interface';
import { LoginResponseInterface } from 'src/app/login/models/login.interface';

export const loginAction = createAction(
  '[Login] LoginAction',
  props<{ data: LoginRequestInterface }>()
);
export const loginSuccessAction = createAction(
  '[Login] LoginSuccessAction',
  props<{ data: LoginResponseInterface }>()
);
export const loginErrorAction = createAction(
  '[Login] LoginErrorAction',
  props<{ message: string }>()
);
export const logoutAction = createAction('[Login] Logout');
