import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { productsReducer } from '../../../store/products/products.reducer';
import { getAllProductsAction } from '../../../store/products/products.actions';
import { of } from 'rxjs';
import { selectProductsData } from 'src/app/store/products/products.selectors';
import { Product } from '../../models/products.interface';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let store: MockStore<{ products: Product[] }>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideMockStore({ initialState: { products: productsReducer } }),
        ProductsComponent,
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    component = TestBed.inject(ProductsComponent);
  });

  it('should dispatch getAllProductsAction', () => {
    const action = getAllProductsAction();
    spyOn(store, 'dispatch');

    component.ngOnInit();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should select products data', () => {
    const mockProducts = [
      {
        id: 1,
        name: 'Product 1',
        description: 'Description 1',
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Description 2',
      },
    ];
    spyOn(store, 'pipe').and.returnValue(of(mockProducts));

    component.ngOnInit();

    expect(component.products$).toEqual(of(mockProducts));
  });
});
