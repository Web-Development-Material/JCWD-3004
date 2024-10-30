export interface Product {
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  description: string;
}

export interface Discount {
  productId: number;
  discount_percentage: number;
  start_date: Date;
  end_date: Date;
}

export interface Auth {
  email: string;
  name: string;
  password: string;
  role: string;
}

export interface Email {
  from: string | undefined;
  to: string;
  subject: string;
  template: string;
  context: any;
}
