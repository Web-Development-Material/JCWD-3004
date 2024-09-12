// -- contoh synchronous
// console.log("Memulai proses ...");
// let result = 5 + 3;
// console.log(`Hasil Penjumlahan ${result}`);
// console.log("Proses selesai.");

// synchronous -> output yang dihasilkan akan berurutan (sequence)

// -- contoh asynchronous
// contoh 1
// console.log("Memulai proses ...");

// setTimeout(() => {
//   console.log("Ini akan dijalankan setelah 2 detik");
// }, 2000); // --> 2000 miliseconds

// console.log("Proses selesai.");

// -- perbedaan arrow function dan function
// -- function biasa
// function setData(){

// }

// -- arrow function
// const setData = () => {

// }

// contoh 2
// console.log("Permainan undian");

// setTimeout(() => {
//   let probability = Math.floor(Math.random() * 4);
//   if (probability >= 3) {
//     console.log("Menang Undian");
//   } else {
//     console.log("Coba lagi besok");
//   }
// }, 60 * 60 * 1000); // --> dalam miliseconds dikali 60 menit/ 3600 detik

// console.log("Undian dimulai ...");
// asynchronous -> output yang dihasilkan berdasarkan time execution

// -------- Callback -> memanggil fungsi lain di dalam sebuah fungsi
// case 1 : alarm
function setAlarm(time, callback) {
  console.log(`Alarm disetel untuk ${time} detik ke depan`);
  setTimeout(() => {
    callback();
  }, time * 1000);
}

function ringAlarm() {
  console.log("Alarm berbunyi! Waktunya bangun");
}

// setAlarm(5, ringAlarm);

// case 2 : homework
function doHomework(task, callback) {
  console.log(`Mengerjakan tugas : ${task}`);
  setTimeout(() => {
    console.log(`Tugas ${task} selesai.`);
    callback();
  }, 4000);
}

function nextTask() {
  console.log("Sekarang lanjut menyapu rumah.");
}

// doHomework("mencuci piring", nextTask);

// case 3 : manipulasi waktu

function timeManipulate() {
  let probability = Math.floor(Math.random() * 3);
  let time = 0;
  console.log("Cek probabilitas : ", probability);

  if (probability === 2) {
    time = 2000;
  } else {
    time = 6000;
  }

  setTimeout(() => {
    console.log("Menjalankan manipulasi waktu");
  }, time);
}

// timeManipulate();

// case 4 : cek khodam
function checkKhodam(namaPeserta) {
  console.log(`Cek khodam dari ${namaPeserta}`);
  let probability = Math.floor(Math.random() * 4);
  setTimeout(() => {
    switch (probability) {
      case 1:
        console.log("Rawa Rontek");
        break;
      case 2:
        console.log("Macan Putih");
        break;
      case 3:
        console.log("Siluman Kodok");
        break;
      case 4:
        console.log("Titisan Mulyono");
        break;
      case 5:
        console.log("Banteng jadi jadian");
        break;
      default:
        console.log("Tidak ada khodam");
    }
    console.log("Cek khodam selesai");
  }, 4000);
}

// checkKhodam("Idham");

// -------- Promise -> menghasilkan sebuah kejadian dimana hasilnya success atau failed
// case 1 : merebus air
function boilWater() {
  return new Promise((accept, reject) => {
    console.log("Memanaskan air ...");

    setTimeout(() => {
      let waterBoiled = Math.floor(Math.random() * 10);
      console.log("Probabilitas : ", waterBoiled);
      if (waterBoiled >= 2) {
        accept("Air sudah mendidih, siap memasak mie");
      } else {
        reject("Air belum mendidih, tunggu lebih lama ...");
      }
    }, 4000);
  });
}

// boilWater()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Proses selesai ...");
//   });

// case 2 : simulasi server
function displayProduct() {
  let data = [
    {
      id: 1,
      name: "Produk A",
    },
    {
      id: 1,
      name: "Produk B",
    },
    {
      id: 1,
      name: "Produk C",
    },
  ];

  return new Promise((accept, reject) => {
    let probability = Math.floor(Math.random() * 10);
    setTimeout(() => {
      if (probability >= 5) {
        accept({
          status: "success",
          data: data,
        });
      } else {
        reject({
          status: "error",
          message: "Failed to get product, because server is not responding",
        });
      }
    }, 4000);
  });
}

// displayProduct()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// case 3 : order online driver

function checkDriverAvailability() {
  return new Promise((resolve, reject) => {
    console.log("Mengecek ketersediaan driver ...");

    setTimeout(() => {
      let driverAvailability = Math.floor(Math.random() * 10);
      if (driverAvailability >= 4) {
        resolve({
          name: "Budi",
          arrivingIn: "5 menit",
        });
      } else {
        reject("Tidak ada driver yang tersedia.");
      }
    }, 5000);
  });
}

// checkDriverAvailability()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Pencarian driver selesai");
//   });

// case 4 : menampilkan data user
class User {
  constructor(id, username) {
    this.id = id;
    this.username = username;
  }

  displayInformation() {
    console.log("Processing ...");
    let server = Math.floor(Math.random() * 10);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (server > 5) {
          resolve({
            id: this.id,
            username: this.username,
          });
        } else {
          reject(
            "Cannot display information, because server is not responding"
          );
        }
      }, 4000);
    });
  }
}

// let user = new User(1, "johndoe");
// user
//   .displayInformation()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ------- Asynchronous Await -> sama dengan promise, tetapi cara menunggu sucess/failed nya yang berbeda
// case 1 : memanggang kue
function bakeCake() {
  return new Promise((resolve, reject) => {
    console.log("Sedang memanggang kue ...");
    setTimeout(() => {
      const isPerfect = Math.floor(Math.random() * 10);
      if (isPerfect >= 4) {
        resolve({
          status: "success",
          result: "kue matang sempurna!",
        });
      } else {
        reject({
          status: "error",
          result: "kue gosong!",
        });
      }
    }, 4000);
  });
}

async function serveCake() {
  try {
    const result = await bakeCake();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// serveCake();

// case 2 : delivery food in restaurants
class Restaurant {
  constructor(name) {
    this.name = name;
  }

  // method untuk membuat orderan
  async placeOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const orderSuccessful = Math.floor(Math.random() * 10);
        if (orderSuccessful >= 4) {
          resolve(`Order place successfully at ${this.name}.`);
        } else {
          reject(`Order failed at ${this.name}.`);
        }
      }, 8000);
    });
  }
}

class Customer extends Restaurant {
  constructor(name, customerName) {
    super(name);
    this.customerName = customerName;
  }

  // method untuk mengantar orderan
  async deliverOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const deliverSuccessful = Math.floor(Math.random() * 10);
        if (deliverSuccessful >= 4) {
          resolve(`Order delivered to ${this.customerName}.`);
        } else {
          reject(`Delivery failed for ${this.customerName}.`);
        }
      }, 4000);
    });
  }
}

async function processOrder() {
  const customerOrder = new Customer("Duo Sakato", "Budi");
  try {
    const orderResult = await customerOrder.placeOrder();
    console.log(orderResult);

    const deliveryResult = await customerOrder.deliverOrder();
    console.log(deliveryResult);
  } catch (error) {
    console.log(error);
  }
}

// processOrder();