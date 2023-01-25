import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CartRequestInterface } from '../models/cart.interface';
import { CartResponseInterface } from '../models/cart.interface';

import { Observable } from 'rxjs';

const BASE_API = 'https://trainee-program-api-staging.applaudostudios.com';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  options = { headers: this.headers };

  postCart(data: CartRequestInterface): Observable<CartResponseInterface> {
    return this.http.post<CartResponseInterface>(
      `${BASE_API}/api/v1/cart`,
      data,
      this.options
    );
  }
  getCart(): Observable<CartResponseInterface> {
    return this.http.get<CartResponseInterface>(
      `${BASE_API}/api/v1/cart`,
      this.options
    );
  }
}
