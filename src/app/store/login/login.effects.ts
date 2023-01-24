import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as loginActions from './login.actions';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoginService } from 'src/app/login/services/login.service';

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private loginService: LoginService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.loginAction),
      exhaustMap(action =>
        this.loginService.postLogin(action.data).pipe(
          map(response => {
            localStorage.setItem('user.token', response.data.token);
            return loginActions.loginSuccessAction({ data: response });
          }),
          catchError(error =>
            of(
              loginActions.loginErrorAction({
                message: 'Incorrect user or password',
              })
            )
          )
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginActions.loginSuccessAction),
        tap(_ => {
          this.router.navigateByUrl('home');
        })
      ),
    { dispatch: false }
  );
}
