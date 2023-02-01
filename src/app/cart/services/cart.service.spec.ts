import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CartService } from './cart.service';
import {
  CartRequestInterface,
  CartResponseInterface,
} from '../models/cart.interface';

const BASE_API = 'https://trainee-program-api-staging.applaudostudios.com';
const CART_REQUEST: CartRequestInterface = {
  data: [
    {
      product_variant_id: 1,
      quantity: 2,
    },
  ],
};
const CART_RESPONSE: CartResponseInterface = {
  data: {
    id: '2',
    user_id: '3',
    number: '2',
    status: 'okas s',
    total: '12.3',
    total_items: '3',
    completed_at: 'test',
    created_at: '2',
    items: {
      id: '2',
      quantity: '2',
      product_variant_id: '2',
      product_id: '2',
      order_id: '2',
      total: '22.3',
      price: '8.3',
      name: '2',
      description: '2',
      promotion: '2',
    },
  },
};

describe('CartService', () => {
  let service: CartService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService],
    });

    service = TestBed.inject(CartService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a post request to the API with the right data', () => {
    service.postCart(CART_REQUEST).subscribe();
    const req = httpMock.expectOne(`${BASE_API}/api/v1/cart`);

    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(CART_REQUEST);
    req.flush(CART_RESPONSE);
  });

  it('should make a get request to the API', () => {
    service.getCart().subscribe();
    const req = httpMock.expectOne(`${BASE_API}/api/v1/cart`);

    expect(req.request.method).toBe('GET');
    req.flush(CART_RESPONSE);
  });
});
