import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../../models/products.interface';
import * as fromProduct from '../../../store/product/product.selectors';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  constructor(private store: Store) {}

  product$!: Observable<Product | undefined>;

  ngOnInit() {
    this.product$ = this.store.pipe(select(fromProduct.selectProductData));
  }
}
