// Belanja Online
// User bisa menambah barang kedalam keranjang
// User bisa melakukan checkout barang yang ada didalam keranjang

// Nampung product yang ditambah
const cart: string[] = [];

const addToCart = async function (product: string) {
  console.log(`Menambahkan barang ke keranjang : ${product} `);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cart.push(product);
      resolve(`Barang ${product} telah ditambahkan ke keranjang 😊`);
      reject("Gagal menambahkan barang");
    }, 2000);
  });
};

const checkout = async function () {
  console.log(`Memproses Checkout`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Checkout berhasil 😊");
      reject("Gagal men-checkout barang");
    }, 3000);
  });
};

const processOrder = async function (product: string) {
  const addCart = await addToCart(product);
  console.log(addCart);

  const checkoutOrder = await checkout();
  console.log(checkoutOrder);
};

processOrder("Laptop"); // Proses pembelian barang

// processOrder("Product A").then(() => {
//     console.log("Product added to cart:", cart);
// });
