import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/app/core/services/category.service';
import { Category } from 'src/app/core/models/category.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  categories: Category[] = [];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: res => (this.categories = res.data),
      error: err => console.log(err),
    });
  }
}
