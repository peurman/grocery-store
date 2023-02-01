import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ProductsInterface } from '../models/products.interface';
import { ProductInterface } from '../models/products.interface';

import { Observable } from 'rxjs';

const BASE_API = 'https://trainee-program-api-staging.applaudostudios.com';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  options = { headers: this.headers };

  getAllProducts(): Observable<ProductsInterface> {
    return this.http.get<ProductsInterface>(
      `${BASE_API}/api/v1/products?include=category,master&&[page][size]=0`,
      this.options
    );
  }

  getProductsByCategory(id: number): Observable<ProductsInterface> {
    return this.http.get<ProductsInterface>(
      `${BASE_API}/api/v1/products?include=category,master&[filter][category_id_eq]=${id}`,
      this.options
    );
  }
  getProduct(slug: string): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(
      `${BASE_API}/api/v1/products/${slug}?include=category,master`,
      this.options
    );
  }
}
