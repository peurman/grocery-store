import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProductsService } from '../../services/products.service';

import { ProductsInterface } from '../../models/products.interface';
import { Product } from '../../models/products.interface';

import { getAllProductsAction } from '../../../store/products/products.actions';

import * as fromProducts from '../../../store/products/products.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private store: Store
  ) {}
  products: Product[] = [];
  products$!: Observable<Product[] | undefined>;

  ngOnInit() {
    this.store.dispatch(getAllProductsAction());
    this.products$ = this.store.pipe(select(fromProducts.selectProductsData));
  }
}
