import { ProductsInterface } from 'src/app/home/models/products.interface';

export interface ProductsState {
  productsData: ProductsInterface | null;
  isLoading: boolean;
  isError: string | null;
}
