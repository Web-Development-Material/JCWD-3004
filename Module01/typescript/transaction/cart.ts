import { Item } from "./interface";

export class Cart {
  items: Item[] = [];

  addItem(item: Item) {
    this.items.push(item);
  }

  removeItem(itemId: number) {
    this.items = this.items.filter((item: any) => item.id !== itemId);
    // tipe data any -> untuk bypass aturan tipe data pada typescript
  }

  calculateTotal() {
    return this.items.reduce(
      (total: number, item: any) => total + item.price * item.quantity,
      0
    );
  }

  clearCart() {
    this.items = [];
  }
}
