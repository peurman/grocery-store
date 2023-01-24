import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as categoriesActions from './categories.actions';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CategoryService } from 'src/app/core/services/category.service';

@Injectable()
export class CategoriesEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoriesActions.getCategoriesAction),
      exhaustMap(() =>
        this.categoryService.getCategories().pipe(
          map(response => {
            return categoriesActions.getCategoriesSuccessAction({
              data: response,
            });
          }),
          catchError(error =>
            of(
              categoriesActions.getCategoriesErrorAction({
                message: 'Incorrect user or password',
              })
            )
          )
        )
      )
    )
  );

  getCategoriesSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(categoriesActions.getCategoriesSuccessAction),
        tap(_ => {
          this.router.navigateByUrl('categories');
        })
      ),
    { dispatch: false }
  );
}
