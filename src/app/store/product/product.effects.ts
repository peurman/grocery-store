import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as productAction from './product.actions';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductsService } from 'src/app/home/services/products.service';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private productsService: ProductsService
  ) {}

  getProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productAction.getProductAction),
      exhaustMap(action =>
        this.productsService.getProduct(action.slug).pipe(
          map(response => {
            return productAction.getProductSuccessAction({
              data: response,
            });
          }),
          catchError(error =>
            of(
              productAction.getProductErrorAction({
                message: 'Cannot get the product',
              })
            )
          )
        )
      )
    )
  );

  // getProductSuccess$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(productAction.getProductSuccessAction),
  //       tap(_ => {
  //         this.router.navigateByUrl('categories');
  //       })
  //     ),
  //   { dispatch: false }
  // );
}
