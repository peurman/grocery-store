import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProductsService } from '../../services/products.service';
import { ProductInterface } from '../../models/products.interface';
import { Product } from '../../models/products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}
  products: Product[] = [];

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(({ id }): Observable<ProductInterface> => {
          return this.productService.getProductsByCategory(id);
        })
      )
      .subscribe(res => (this.products = res.data));
  }
}
