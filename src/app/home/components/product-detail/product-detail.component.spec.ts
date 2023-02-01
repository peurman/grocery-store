import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { select } from '@ngrx/store';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
// import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as fromProduct from '../../../store/product/product.selectors';

import { productReducer } from '../../../store/product/product.reducer';
import { ProductDetailComponent } from './product-detail.component';
import { mockProduct } from 'src/app/test/mock/mock.products';
import { ProductInterface } from '../../models/products.interface';
import { RootState } from 'src/app/store';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let store: MockStore<{ product: { productData: ProductInterface } }>;
  let activatedRoute: ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        // StoreModule.forRoot({ product: productReducer }),
      ],
      declarations: [ProductDetailComponent],
      providers: [
        provideMockStore({
          initialState: { product: { productData: {} } },
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ slug: 'product-1' }),
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  describe('component creation', () => {
    it('should create the product-detail component', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('template rendering', () => {
    beforeEach(() => {
      component.product$ = of(mockProduct.data);
      fixture.detectChanges();
    });

    it('should render product name', () => {
      fixture.detectChanges();
      const productName = fixture.debugElement.query(By.css('.product__name'));
      expect(productName.nativeElement.textContent).toBe('product 1');
    });
    it('should render product price', () => {
      fixture.detectChanges();
      const productPrice = fixture.debugElement.query(
        By.css('.product__price')
      );
      expect(productPrice.nativeElement.textContent).toBe(' $10.00');
    });
    it('should render product category', () => {
      fixture.detectChanges();
      const productCategory = fixture.debugElement.query(
        By.css('.product_category b')
      );
      expect(productCategory.nativeElement.textContent).toBe('category 1');
    });
    it('should render product description', () => {
      fixture.detectChanges();
      const productDescription = fixture.debugElement.query(
        By.css('.product__description b')
      );
      expect(productDescription.nativeElement.textContent).toBe('description ');
    });
    it('should render product stock', () => {
      fixture.detectChanges();
      const productStock = fixture.debugElement.query(
        By.css('.product__stock b')
      );
      expect(productStock.nativeElement.textContent).toBe('2');
    });
    it('should render product likes count', () => {
      fixture.detectChanges();
      const productLikes = fixture.debugElement.query(
        By.css('.product__likes b')
      );
      expect(productLikes.nativeElement.textContent).toBe('3');
    });
  });

  describe('selector', () => {
    it('should call the selector in ngOnInit', async () => {
      spyOn(store, 'select').and.callThrough();
      component.ngOnInit();
      expect(store.select).toHaveBeenCalledWith(
        (state: RootState) => state.product.productData
      );
    });
    it('should select product data', done => {
      component.product$.subscribe(product => {
        store
          .pipe(select(fromProduct.selectProductData))
          .subscribe(selectedProductData => {
            expect(product).toEqual(selectedProductData);
            done();
          });
      });
    });
  });
});
