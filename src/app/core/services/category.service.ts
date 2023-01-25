import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CategoryInterface } from '../models/category.interface';

import { Observable } from 'rxjs';

const BASE_API = 'https://trainee-program-api-staging.applaudostudios.com';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  options = { headers: this.headers };

  getCategories(): Observable<CategoryInterface> {
    return this.http.get<CategoryInterface>(
      `${BASE_API}/api/v1/categories`,
      this.options
    );
  }
}
