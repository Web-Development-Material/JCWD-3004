import { Product } from "./product";
import { Cart } from "./cart";
import { Transaction } from "./transaction";

const cart = new Cart();
const transaction = new Transaction();

const item1 = new Product(1, "Laptop", 15000000, 1);
const item2 = new Product(2, "Headphone", 1000000, 2);

cart.addItem(item1);
cart.addItem(item2);

console.log("Total Harga : ", cart.calculateTotal());

transaction.checkout(cart);

console.log("History Transaksi : ", transaction.getTransactionHistory());
