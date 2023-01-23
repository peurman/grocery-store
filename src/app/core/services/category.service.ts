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

  // token =
  //   'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwiZXhwIjoxNjc0NTEzNjY1fQ.1cvYxWXrFhvm1nxZttXcdSQgq5VL5Qry7vh5qDep5fI';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  // .set('Authorization', 'Bearer ' + this.token);
  options = { headers: this.headers };

  // Login
  getCategories(): Observable<CategoryInterface> {
    return this.http.get<CategoryInterface>(
      `${BASE_API}/api/v1/categories`,
      this.options
    );
  }
}
