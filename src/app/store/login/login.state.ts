import { LoginResponseInterface } from 'src/app/login/models/login.interface';

export interface LoginState {
  loginData: LoginResponseInterface | null;
  isLoading: boolean;
  isError: string | null;
}
