export interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface History {
  items: Item[];
  total: number;
  date: Date;
}
