//buat fungsi untuk pesawat dengan promise 3000
//buat fungsi untuk hotel dengan promise 2000
//buat fungsi untuk keduanya (hotel dan pesawat) dengan result pesanan

async function bookFlight(flightName: string) {
  console.log(`memesan penerbangan ke ${flightName}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Penerbangan ke ${flightName} Telah dipesan`);
    }, 3000);
  });
}

async function bookHotel(hotelName: string) {
  console.log(`memesan hotel ke ${hotelName}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hotel ${hotelName} Telah dipesan`);
    }, 2000);
  });
}

async function planVacation(flightName: string, hotelName: string) {
  try {
    
    const bookedFlight = await bookFlight(flightName);
    console.log(bookedFlight); 
    const bookedHotel = await bookHotel(hotelName);
    console.log(bookedHotel);
    
    console.log(
      `Lburan ke ${flightName} , dan menginap di ${hotelName} telah direncanakan`
    );
  } catch (err) {
    console.log(err);
  }
}

planVacation("Bali", "Bali Indah");
