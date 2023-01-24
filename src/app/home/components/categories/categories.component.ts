import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CategoryService } from 'src/app/core/services/category.service';

import { Category } from 'src/app/core/models/category.interface';
import { CategoryInterface } from 'src/app/core/models/category.interface';
import { getCategoriesAction } from 'src/app/store/categories/categories.actions';
import * as fromCategories from '../../../store/categories/categories.selectors';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private store: Store) {}

  categories: Category[] = [];
  categories$!: Observable<Category[] | undefined>;

  ngOnInit(): void {
    this.store.dispatch(getCategoriesAction());
    this.categories$ = this.store.pipe(
      select(fromCategories.selectCategoriesData)
    );
  }
}
