import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as RouterActions from '../actions/router.action';

import { tap, map } from 'rxjs/operators';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}

  // navigate$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(RouterActions.GO),
  //     map((action: RouterActions.Go) => action.payload),
  //     tap(({ path, query: queryParams, extras }) => {
  //       this.router.navigate(path, { queryParams, ...extras });
  //     })
  //   )
  // );

  // navigateBack$ = createEffect(() =>
  //   this.actions$
  //     .ofType(RouterActions.BACK)
  //     .pipe(tap(() => this.location.back()))
  // );

  // navigateForward$ = createEffect(() =>
  //   this.actions$
  //     .ofType(RouterActions.FORWARD)
  //     .pipe(tap(() => this.location.forward()))
  // );
}
