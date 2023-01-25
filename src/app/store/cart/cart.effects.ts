import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as cartActions from './cart.actions';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private cartService: CartService
  ) {}

  getCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.getCartAction),
      exhaustMap(() =>
        this.cartService.getCart().pipe(
          map(response => {
            return cartActions.getCartSuccessAction({
              data: response,
            });
          }),
          catchError(error =>
            of(
              cartActions.getCartErrorAction({
                message: 'Cannot get the cart',
              })
            )
          )
        )
      )
    )
  );

  getCartSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartActions.getCartSuccessAction),
        tap(_ => {
          this.router.navigateByUrl('home');
        })
      ),
    { dispatch: false }
  );
}
