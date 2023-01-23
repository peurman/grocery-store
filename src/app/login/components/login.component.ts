import { Component } from '@angular/core';

import { LoginRequestInterface } from '../models/login.interface';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  bodyInfo: LoginRequestInterface = {
    data: {
      email: '',
      password: '',
    },
  };

  //  email: 'trainee4@example.com',
  //  password: 'Trainee$4',

  handleSubmit(value: object, isValid: boolean | null) {
    if (isValid) {
      this.bodyInfo.data = Object(value);
    }
    this.loginService.postLogin(this.bodyInfo).subscribe({
      next: res => console.log(res),
      error: err => console.log(err),
    });
  }
}
