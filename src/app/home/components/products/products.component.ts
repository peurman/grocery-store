import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../../models/products.interface';

import { getAllProductsAction } from '../../../store/products/products.actions';

import * as fromProducts from '../../../store/products/products.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private store: Store) {}
  products: Product[] = [];
  products$!: Observable<Product[] | undefined>;

  ngOnInit() {
    this.store.dispatch(getAllProductsAction());
    this.products$ = this.store.pipe(select(fromProducts.selectProductsData));
  }
}
