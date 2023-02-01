import {
  CategoryInterface,
  Category,
} from 'src/app/core/models/category.interface';

export const mockCategoriesArray: Category[] = [
  { id: 1, slug: 'category-1', name: 'category 1' },
  { id: 2, slug: 'category-2', name: 'category 2' },
  { id: 3, slug: 'category-3', name: 'category 3' },
];
export const mockCategories: CategoryInterface = {
  data: mockCategoriesArray,
  meta: {
    current_page: 1,
    from: null,
    last_page: 1,
    per_page: 10,
    to: null,
    total: 10,
  },
};
