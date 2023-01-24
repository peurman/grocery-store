import { createReducer, on, Action } from '@ngrx/store';
import * as loginActions from './login.actions';
import { LoginState } from './login.state';

export const initialLoginState: LoginState = {
  loginData: null,
  isLoading: false,
  isError: null,
};

export const loginReducerInternal = createReducer(
  initialLoginState,
  on(loginActions.loginAction, state => {
    return {
      ...state,
      isLoading: true,
      isError: null,
    };
  }),
  on(loginActions.loginSuccessAction, (state, { data }) => {
    return {
      ...state,
      loginData: data,
      isLoading: false,
    };
  }),
  on(loginActions.loginErrorAction, (state, { message }) => {
    return {
      ...state,
      isLoading: false,
      isError: message,
    };
  })
);
export function loginReducer(state: LoginState | undefined, action: Action) {
  return loginReducerInternal(state, action);
}
