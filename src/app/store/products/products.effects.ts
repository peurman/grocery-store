import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as productsActions from './products.actions';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductsService } from 'src/app/home/services/products.service';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private productsService: ProductsService
  ) {}

  getAllProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productsActions.getAllProductsAction),
      exhaustMap(() =>
        this.productsService.getAllProducts().pipe(
          map(response => {
            return productsActions.getAllProductsSuccessAction({
              data: response,
            });
          }),
          catchError(error =>
            of(
              productsActions.getAllProductsErrorAction({
                message: 'Cannot get the products',
              })
            )
          )
        )
      )
    )
  );

  getProductsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(productsActions.getAllProductsSuccessAction),
        tap(_ => {
          this.router.navigateByUrl('home');
        })
      ),
    { dispatch: false }
  );

  getProductsByCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productsActions.getProductsByCategoryAction),
      exhaustMap(action =>
        this.productsService.getProductsByCategory(action.id).pipe(
          map(response => {
            return productsActions.getProductsByCategorySuccessAction({
              data: response,
            });
          }),
          catchError(error =>
            of(
              productsActions.getProductsByCategoryErrorAction({
                message: 'Cannot get the products of that category',
              })
            )
          )
        )
      )
    )
  );

  getProductsByCategorySuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(productsActions.getProductsByCategorySuccessAction),
        tap(_ => {
          this.router.navigateByUrl('home');
        })
      ),
    { dispatch: false }
  );
}
