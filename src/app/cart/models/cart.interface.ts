export interface CartRequestInterface {
  data: Item[];
}

export interface Item {
  product_variant_id: number;
  quantity: number;
}

export interface CartResponseInterface {
  data: Data;
}
export interface Data {
  id: string;
  user_id: string;
  number: string;
  status: string;
  total: string;
  total_items: string;
  completed_at: string;
  created_at: string;
  items: Items;
}
export interface Items {
  id: string;
  quantity: string;
  product_variant_id: string;
  product_id: string;
  order_id: string;
  total: string;
  price: string;
  name: string;
  description: string;
  promotion: string;
}
