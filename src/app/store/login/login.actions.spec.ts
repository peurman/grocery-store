import * as fromActions from './login.actions';
import {
  LoginRequestInterface,
  LoginResponseInterface,
} from 'src/app/login/models/login.interface';

describe('Login and Logout actions', () => {
  it('should create an action to login', () => {
    const payload: LoginRequestInterface = {
      data: { email: 'test@teset.com', password: 'password' },
    };
    const action = fromActions.loginAction({ data: payload });
    expect(action.type).toEqual('[Login] Login Action');
    expect(action.data).toEqual(payload);
  });

  it('should create an action to indicate a successful login', () => {
    const payload: LoginResponseInterface = {
      data: {
        token: 'token',
        user: {
          id: 1,
          email: 'test@teset.com',
          name: 'test',
        },
      },
    };
    const action = fromActions.loginSuccessAction({ data: payload });
    expect(action.type).toEqual('[Login] Login Success Action');
    expect(action.data).toEqual(payload);
  });

  it('should create an action to indicate an error login', () => {
    const payload = 'Error message';
    const action = fromActions.loginErrorAction({ message: payload });
    expect(action.type).toEqual('[Login] Login Error Action');
    expect(action.message).toEqual(payload);
  });

  it('should create an action to logout', () => {
    const action = fromActions.logoutAction();
    expect(action.type).toEqual('[Login] Logout');
  });
});
