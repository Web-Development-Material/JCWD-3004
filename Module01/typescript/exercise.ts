// contoh interface untuk function
// -- jika function memiliki return, maka tipe datanya disesuaikan dengan hasil returnnya
// -- jika function tidak memilik return, maka tipe datanya "VOID"

interface InputNumber {
  number_a: number;
  number_b: number;
}

function sumBetweenNumber(data: InputNumber): number {
  let result = data.number_a + data.number_b;
  return result;
}

// ----------------------------------------------------------------

// task 1

interface FoodCallback {
  (message: string): void;
}

function orderFood(foodName: string, callback: FoodCallback) {
  console.log("Memesan makanan : " + foodName);
  setTimeout(() => {
    callback("Makanan " + foodName + " telah dipesan!");
  }, 3000);
}

function deliverFood(foodName: string, callback: FoodCallback) {
  console.log("Mengantarkan makanan : " + foodName);
  setTimeout(() => {
    callback("Makanan " + foodName + " telah diantarkan!");
  }, 5000);
}

// orderFood("Pizza", (message: string) => {
//   console.log(message); // menampilkan konfirmasi pesanan
//   deliverFood("Pizza", (message: string) => {
//     console.log(message); // menampilkan konfirmasi pengantaran
//   });
// });

// task 2
interface PromiseMessage {
  message: string;
}

function addToCartItem(itemName: string): Promise<PromiseMessage> {
  console.log("Menambahkan barang ke keranjang : " + itemName);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: "Barang " + itemName + " telah ditambahkan ke keranjang.",
      });
    }, 2000);
  });
}

function checkoutItem(): Promise<PromiseMessage> {
  console.log("Memproses checkout ...");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: "Checkout berhasil!",
      });
    }, 3000);
  });
}

async function processOrderItem(itemName: string) {
  try {
    const cartResult = await addToCartItem(itemName);
    console.log(cartResult.message); // menampilkan pesan penambahan ke keranjang

    const checkoutResult = await checkoutItem();
    console.log(checkoutResult.message); // menampilkan pesan checkout berhasil
  } catch (error) {
    console.log(error);
  }
}

processOrderItem("Laptop");
