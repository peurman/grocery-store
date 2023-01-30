// import {
//   addCartAction,
//   addCartSuccessAction,
//   addCartErrorAction,
//   getCartAction,
//   getCartSuccessAction,
//   getCartErrorAction,
// } from './cart.actions';
// import {
//   CartRequestInterface,
//   CartResponseInterface,
// } from 'src/app/cart/models/cart.interface';

// describe('Cart Actions', () => {
//   it('should create an action to add an item to the cart', () => {
//     const cartItem: CartRequestInterface = { itemId: 1, quantity: 2 };
//     const action = addCartAction({ data: cartItem });
//     expect(action.type).toEqual('[Cart] Add Cart Action');
//     expect(action.data).toEqual(cartItem);
//   });

//   it('should create an action to indicate a successful cart item addition', () => {
//     const cart: CartResponseInterface = {
//       items: [{ id: 1, quantity: 2 }],
//       total: 20,
//     };
//     const action = addCartSuccessAction({ data: cart });
//     expect(action.type).toEqual('[Cart] Add Cart Success Action');
//     expect(action.data).toEqual(cart);
//   });

//   it('should create an action to indicate an error adding an item to the cart', () => {
//     const message = 'Error adding item to cart';
//     const action = addCartErrorAction({ message });
//     expect(action.type).toEqual('[Cart] Add Cart Error Action');
//     expect(action.message).toEqual(message);
//   });

//   it('should create an action to retrieve the cart', () => {
//     const action = getCartAction();
//     expect(action.type).toEqual('[Cart] Get Cart Action');
//   });

//   it('should create an action to indicate a successful cart retrieval', () => {
//     const cart: CartResponseInterface = {
//       items: [{ id: 1, quantity: 2 }],
//       total: 20,
//     };
//     const action = getCartSuccessAction({ data: cart });
//     expect(action.type).toEqual('[Cart] Get Cart Success Action');
//     expect(action.data).toEqual(cart);
//   });

//   it('should create an action to indicate an error retrieving the cart', () => {
//     const message = 'Error retrieving cart';
//     const action = getCartErrorAction({ message });
//     expect(action.type).toEqual('[Cart] Get Cart Error Action');
//     expect(action.message).toEqual(message);
//   });
// });
