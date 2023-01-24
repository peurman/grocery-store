import { CategoryInterface } from 'src/app/core/models/category.interface';

export interface CategoryState {
  categoriesData: CategoryInterface | null;
  isLoading: boolean;
  isError: string | null;
}
