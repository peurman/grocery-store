import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getProductAction } from 'src/app/store/product/product.actions';

import { Product } from '../../models/products.interface';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  constructor(private router: Router, private store: Store) {}

  onClick(value: string) {
    this.store.dispatch(getProductAction({ slug: value }));

    this.router.navigate(['/home', value]);
  }
}
