import { CartComponent } from './cart.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { getCartAction } from 'src/app/store/cart/cart.actions';
import * as fromCart from '../../store/cart/cart.selectors';
// import { cold } from 'jasmine-marbles';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [],
      providers: [provideMockStore()],
    });

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    store = TestBed.get(MockStore);
  });

  it('should dispatch getCartAction', () => {
    spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(getCartAction());
  });

  it('should select cart data', () => {
    // const cartData = { data: 'cart data' };
    // const selectCartData = cold('a', { a: cartData });
    // spyOn(store, 'pipe').and.returnValue(selectCartData);
    // component.ngOnInit();
    // expect(component.cart$).toBeObservable(selectCartData);
  });
});
