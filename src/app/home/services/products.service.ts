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

  // token =
  //   'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwiZXhwIjoxNjc0NTEzNjY1fQ.1cvYxWXrFhvm1nxZttXcdSQgq5VL5Qry7vh5qDep5fI';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  // .set('Authorization', 'Bearer ' + this.token);
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
