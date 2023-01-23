import { LoginEffects } from './login/login.effects';
import { loginReducer } from './login/login.reducer';
import { LoginState } from './login/login.state';
// import { HomeEffects } from './home/home.effects';
// import { homeReducer } from './home/home.reducer';
// import { HomeState } from './home/home.state';

export interface RootState {
  login: LoginState;
  // home: HomeState;
}

export const appReducer = {
  login: loginReducer,
  // home: homeReducer,
};

export const appEffects = [
  LoginEffects,
  // HomeEffects
];
