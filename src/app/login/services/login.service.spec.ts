import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { LoginService } from './login.service';
import { LoginRequestInterface } from '../models/login.interface';
import { LoginResponseInterface } from '../models/login.interface';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });

    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should make a post request to the login endpoint', () => {
    const loginRequest: LoginRequestInterface = {
      data: {
        email: 'test@example.com',
        password: 'Test123',
      },
    };

    service.postLogin(loginRequest).subscribe();

    const req = httpMock.expectOne(
      'https://trainee-program-api-staging.applaudostudios.com/api/v1/users/login'
    );
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(loginRequest);
  });

  it('should return a LoginResponseInterface', () => {
    const loginRequest: LoginRequestInterface = {
      data: {
        email: 'test@example.com',
        password: 'Test123',
      },
    };

    const loginResponse: LoginResponseInterface = {
      data: {
        token: 'abc123',
        user: {
          id: 1,
          name: 'John Doe',
          email: 'test@example.com',
        },
      },
    };

    service.postLogin(loginRequest).subscribe(res => {
      expect(res).toEqual(loginResponse);
    });

    const req = httpMock.expectOne(
      'https://trainee-program-api-staging.applaudostudios.com/api/v1/users/login'
    );
    req.flush(loginResponse);
  });
});
