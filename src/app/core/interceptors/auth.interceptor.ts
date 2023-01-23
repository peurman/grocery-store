import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
// import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // constructor(private auth: AuthService) {}

  // ! hardcoded token -> must come from state o localStorage
  token =
    'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwiZXhwIjoxNjc0NTEzNjY1fQ.1cvYxWXrFhvm1nxZttXcdSQgq5VL5Qry7vh5qDep5fI';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const token = this.auth.getToken();
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${this.token}`),
    });
    return next.handle(authReq);
  }
}
