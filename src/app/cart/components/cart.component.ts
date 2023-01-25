import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getCartAction } from 'src/app/store/cart/cart.actions';
import * as fromCart from '../../store/cart/cart.selectors';

import { Data } from '../models/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private store: Store) {}

  cart$!: Observable<Data | undefined>;

  ngOnInit(): void {
    this.store.dispatch(getCartAction());
    this.cart$ = this.store.pipe(select(fromCart.selectCartData));
  }
}
