import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginAction } from '../../store/login/login.actions';

import { LoginRequestInterface } from '../models/login.interface';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private store: Store) {}

  bodyInfo: LoginRequestInterface = {
    data: {
      email: 'trainee4@example.com',
      password: 'Trainee$4',
    },
  };

  //  email: 'trainee4@example.com',
  //  password: 'Trainee$4',

  handleSubmit(value: object, isValid: boolean | null) {
    if (isValid) {
      this.bodyInfo.data = Object(value);
      this.store.dispatch(loginAction({ data: this.bodyInfo }));
    }
  }
}
