import {
  addCartAction,
  addCartSuccessAction,
  addCartErrorAction,
  getCartAction,
  getCartSuccessAction,
  getCartErrorAction,
} from './cart.actions';
import {
  CartRequestInterface,
  CartResponseInterface,
} from 'src/app/cart/models/cart.interface';

describe('Cart Actions', () => {
  it('should create an action to add an item to the cart', () => {
    const cartItem: CartRequestInterface = {
      data: [{ product_variant_id: 1, quantity: 10 }],
    };
    const action = addCartAction({ data: cartItem });
    expect(action.type).toEqual('[Cart] Add Cart Action');
    expect(action.data).toEqual(cartItem);
  });

  it('should create an action to indicate a successful cart item addition', () => {
    const cart: CartResponseInterface = {
      data: {
        id: '1',
        user_id: '2',
        number: '3',
        status: 'ok',
        total: '32',
        total_items: '50',
        completed_at: 'test',
        created_at: 'test',
        items: {
          id: '3',
          quantity: '20',
          product_variant_id: '3',
          product_id: '3',
          order_id: '3',
          total: '20',
          price: '10.2',
          name: 'test',
          description: 'description',
          promotion: 'promotion',
        },
      },
    };
    const action = addCartSuccessAction({ data: cart });
    expect(action.type).toEqual('[Cart] Add Cart Success Action');
    expect(action.data).toEqual(cart);
  });

  it('should create an action to indicate an error adding an item to the cart', () => {
    const message = 'Error adding item to cart';
    const action = addCartErrorAction({ message });
    expect(action.type).toEqual('[Cart] Add Cart Error Action');
    expect(action.message).toEqual(message);
  });

  it('should create an action to retrieve the cart', () => {
    const action = getCartAction();
    expect(action.type).toEqual('[Cart] Get Cart Action');
  });

  it('should create an action to indicate a successful cart retrieval', () => {
    const cart: CartResponseInterface = {
      data: {
        id: '1',
        user_id: '2',
        number: '3',
        status: 'ok',
        total: '32',
        total_items: '50',
        completed_at: 'test',
        created_at: 'test',
        items: {
          id: '3',
          quantity: '20',
          product_variant_id: '3',
          product_id: '3',
          order_id: '3',
          total: '20',
          price: '10.2',
          name: 'test',
          description: 'description',
          promotion: 'promotion',
        },
      },
    };
    const action = getCartSuccessAction({ data: cart });
    expect(action.type).toEqual('[Cart] Get Cart Success Action');
    expect(action.data).toEqual(cart);
  });

  it('should create an action to indicate an error retrieving the cart', () => {
    const message = 'Error retrieving cart';
    const action = getCartErrorAction({ message });
    expect(action.type).toEqual('[Cart] Get Cart Error Action');
    expect(action.message).toEqual(message);
  });
});
