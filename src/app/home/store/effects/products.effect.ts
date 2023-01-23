import { Injectable } from '@angular/core';

import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as productActions from '../actions/products.action';
import * as fromServices from '../../services/products.service';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: fromServices.ProductsService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.LOAD_PRODUCTS),
      switchMap(() => {
        return this.productService.getAllProducts().pipe(
          map(
            products => new productActions.LoadProductsSuccess(products.data)
          ),
          catchError(error => of(new productActions.LoadProductsFail(error)))
        );
      })
    )
  );
  // @Effect()
  // loadProducts$ = this.actions$.ofType(productActions.LOAD_PRODUCTS).pipe(
  //   switchMap(() => {
  //     return this.productService.getAllProducts().pipe(
  //       map(products => new productActions.LoadProductsSuccess(products)),
  //       catchError(error => of(new productActions.LoadProductsFail(error)))
  //     );
  //   })
  // );
}
