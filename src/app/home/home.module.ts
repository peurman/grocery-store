import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home.component';
// import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [HomeComponent, ProductsComponent, ProductDetailComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [],
})
export class HomeModule {}
