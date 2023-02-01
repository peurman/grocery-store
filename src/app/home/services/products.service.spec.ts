import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ProductsService } from './products.service';
import {
  ProductInterface,
  ProductsInterface,
} from '../models/products.interface';
import { mockProducts } from 'src/app/test/mock/mock.products';
import { mockProduct } from 'src/app/test/mock/mock.products';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });

    service = TestBed.get(ProductsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all products', () => {
    const mockProductsIt: ProductsInterface = mockProducts;

    service.getAllProducts().subscribe(products => {
      expect(products).toEqual(mockProductsIt);
    });

    const req = httpMock.expectOne(
      'https://trainee-program-api-staging.applaudostudios.com/api/v1/products?include=category,master&&[page][size]=0'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  it('should return products by category', () => {
    const categoryId = 1;
    const mockProductsIt: ProductsInterface = mockProducts;

    service.getProductsByCategory(categoryId).subscribe(products => {
      expect(products).toEqual(mockProductsIt);
    });

    const req = httpMock.expectOne(
      `https://trainee-program-api-staging.applaudostudios.com/api/v1/products?include=category,master&[filter][category_id_eq]=${categoryId}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockProductsIt);
  });

  it('should return a product', () => {
    const slug = 'product-1';
    const mockProductIt: ProductInterface = mockProduct;

    service.getProduct(slug).subscribe(product => {
      expect(product).toEqual(mockProductIt);
    });

    const req = httpMock.expectOne(
      `https://trainee-program-api-staging.applaudostudios.com/api/v1/products/${slug}?include=category,master`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockProductIt);
  });
});
