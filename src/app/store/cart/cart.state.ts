import { CartResponseInterface } from 'src/app/cart/models/cart.interface';

export interface CartState {
  cartData: CartResponseInterface | null;
  isLoading: boolean;
  isError: string | null;
}
