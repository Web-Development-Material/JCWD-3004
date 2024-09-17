import { Cart } from "./cart";
import { History } from "./interface";

export class Transaction {
  history: History[] = [];

  checkout(cart: Cart) {
    const total = cart.calculateTotal();
    const transactionData = {
      items: cart.items,
      total,
      date: new Date(),
    };
    this.history.push(transactionData);
    cart.clearCart();
  }

  getTransactionHistory() {
    return this.history;
  }
}
