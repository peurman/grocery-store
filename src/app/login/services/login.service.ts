import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, tap } from 'rxjs';
import { LoginResponseInterface } from '../models/login.interface';
import { LoginRequestInterface } from '../models/login.interface';

const BASE_API = 'https://trainee-program-api-staging.applaudostudios.com';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  options = { headers: this.headers };

  // Login
  postLogin(data: LoginRequestInterface): Observable<LoginResponseInterface> {
    return this.http.post<LoginResponseInterface>(
      `${BASE_API}/api/v1/users/login`,
      data,
      this.options
    );
  }
}
