import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';

import { getProductAction } from 'src/app/store/product/product.actions';
import { ProductCardComponent } from './product-card.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

import { mockProduct } from 'src/app/test/mock/mock.products';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let store: MockStore;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'home/:slug', component: ProductDetailComponent },
          { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]),
      ],
      declarations: [ProductCardComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = mockProduct.data;
    fixture.detectChanges();
  }));

  describe('component creation', () => {
    it('should create the product-card component', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('onClick', () => {
    it('should dispatch getProductAction when onClick is called', () => {
      component.onClick(mockProduct.data.slug);
      expect(store.dispatch).toHaveBeenCalledWith(
        getProductAction({ slug: mockProduct.data.slug })
      );
    });
    it('should navigate to /home/product-1 when onClick is called', () => {
      const navigateSpy = spyOn(component.router, 'navigate');
      component.onClick(mockProduct.data.slug);
      expect(navigateSpy).toHaveBeenCalledWith([
        '/home',
        mockProduct.data.slug,
      ]);
    });
  });
  describe('template rendering', () => {
    it('should render product name', () => {
      const productName = fixture.debugElement.query(By.css('.product__name'));
      expect(productName.nativeElement.textContent).toContain(
        component.product.name
      );
    });
    it('should render product description', () => {
      const productDescription = fixture.debugElement.query(
        By.css('.product__description')
      );
      expect(productDescription.nativeElement.textContent).toContain(
        component.product.description
      );
    });
    it('should render product likes', () => {
      const productDescription = fixture.debugElement.query(
        By.css('.product__description')
      );
      expect(productDescription.nativeElement.textContent).toContain(
        component.product.likes_count
      );
    });
    it('should render view details button', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('button').textContent).toContain(
        'View details'
      );
    });

    it('should render heart button', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('button')[1]).toBeTruthy();
    });

    it('should render cart button', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('button')[2]).toBeTruthy();
    });

    it('should render heart image', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('img')[0]).toBeTruthy();
    });
    it('should render cart image', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('img')[1]).toBeTruthy();
    });
  });
  describe('template integration', () => {
    it('should render "product 1" as product name', () => {
      const productName = fixture.debugElement.query(By.css('.product__name'));
      expect(productName.nativeElement.textContent).toEqual('product 1');
    });

    it('should render "test description - ( 10 likes )" as description and likes', () => {
      const productDescription = fixture.nativeElement.querySelector(
        '.product__description'
      );
      expect(productDescription.textContent).toEqual(
        'description - ( 3 likes )'
      );
    });
  });
});
