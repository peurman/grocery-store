export interface ProductsInterface {
  data: Product[];
  meta: Meta;
}
export interface ProductInterface {
  data: Product;
  meta: object;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  active: number;
  likes_count: number;
  likes_up_count: number;
  likes_down_count: number;
  published_at: Date;
  master: Master;
  category: Category;
}

export interface Category {
  id: number;
  slug: string;
  name: string;
}

export interface Master {
  id: number;
  sku: string;
  price: string;
  promotional_price: string;
  stock: number;
  weight: number | null;
  height: number | null;
  width: number | null;
  depth: number | null;
  is_master: number;
  position: number;
}

export interface Meta {
  current_page: number;
  from: string | null;
  last_page: number;
  per_page: number;
  to: string | null;
  total: number;
}
