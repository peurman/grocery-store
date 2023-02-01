import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CategoryService } from './category.service';
import { CategoryInterface } from '../models/category.interface';
import { mockCategories } from 'src/app/test/mock/mock-categories';

describe('CategoryService', () => {
  let service: CategoryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryService],
    });

    service = TestBed.get(CategoryService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve categories from the API', () => {
    const categories: CategoryInterface = mockCategories;

    service.getCategories().subscribe(res => {
      expect(res).toEqual(categories);
    });

    const request = httpMock.expectOne(
      `https://trainee-program-api-staging.applaudostudios.com/api/v1/categories`
    );
    expect(request.request.method).toBe('GET');
    request.flush(categories);
  });
});
