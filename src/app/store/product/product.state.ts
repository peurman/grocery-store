import { ProductInterface } from 'src/app/home/models/products.interface';

export interface ProductState {
  productData: ProductInterface | null;
  isLoading: boolean;
  isError: string | null;
}
