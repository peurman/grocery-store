import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { reducers, effects } from './store';

import { HomeComponent } from './components/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // StoreModule.forFeature('products', reducers),
    // EffectsModule.forFeature(effects),
  ],
})
export class HomeModule {}
