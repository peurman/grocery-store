export interface CategoryInterface {
  data: Category[];
  meta: Meta;
}
export interface Category {
  id: number;
  slug: string;
  name: string;
}

export interface Meta {
  current_page: number;
  from: string | null;
  last_page: number;
  per_page: number;
  to: string | null;
  total: number;
}
