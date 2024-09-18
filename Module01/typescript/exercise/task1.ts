// Question 1 - Callback (Pemesanan & Pengantaran Makanan)

// Function orderFood
function orderFood (foodName: string, callback: Function) {
    console.log (`Memesan Makanan: ${foodName}`);
    setTimeout(() => {
        console.log(`Makanan ${foodName} telah dipesan! 📝`)
        callback (foodName, finishDeliver);
    }, 3000);
}

// Function deliverFood
function deliverFood (foodName: string, callback: Function) {
    setTimeout(() => {
        console.log(`Mengantarkan Makanan ${foodName} 🛵💨💨`)
        callback (foodName);
    }, 2000);
}

// Function finishDeliver
function finishDeliver (foodname: string) {
    setTimeout(() => {
        console.log(`Makanan ${foodname} telah diantarkan! ⭐⭐⭐`)
    }, 5000);
}

// Call the function deliverFood
orderFood("Pizza", deliverFood);