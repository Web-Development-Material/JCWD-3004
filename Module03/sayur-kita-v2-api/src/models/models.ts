export interface Product {
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
}

export interface Discount {
  productId: number;
  discount_percentage: number;
  start_date: Date;
  end_date: Date;
}
