import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { select } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as fromProduct from '../../../store/product/product.selectors';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let store: MockStore;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProductDetailComponent],
      providers: [
        provideMockStore(),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ slug: 'product-1' }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select product data', async () => {
    const selectedProductData = await store.pipe(
      select(fromProduct.selectProductData)
    );
    expect(component.product$).toEqual(selectedProductData);
  });
  // it('should select product data', done => {
  //   component.product$.subscribe(product => {
  //     store
  //       .pipe(select(fromProduct.selectProductData))
  //       .subscribe(selectedProductData => {
  //         expect(product).toEqual(selectedProductData);
  //         done();
  //       });
  //   });
  // });
});
