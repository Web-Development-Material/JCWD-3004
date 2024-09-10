// --- Dota 2 Item Store Purchase ---

// Inputs
let initialGold = 2500;
let unsortedItems = [
  "Magic Stick (200)",
  "Boots of Speed (500)",
  "Helm of Iron Will (925)",
  "Claymore (1400)",
  "Broadsword (1200)",
  "Battle Fury (4200)",
];


// Step 1 --- Data masih berupa string dan belum terstruktur sebagai Key dan Value.
// Dibawah akan diproses terlebih dahulu pemisahan dengan cara menghilangkan beberapa indeks.
let itemStore = {}; // Tempat untuk menyimpan hasil perubahan dari unsortedItems.addImage

for (let item of unsortedItems) {
    let [name, price] = item.split(" (");
    itemStore[name] = parseInt(price.replace(")", ""));
}

console.log("Item Store : ", itemStore);


// Step 2 --- Setelah proses pemisahan selesai dan itemStore sudah menjadi object, selanjutnya akan diubah menjadi Array agar
// nanti bisa diproses pada saat implementasi selection sorting.
let itemsArray = Object.entries(itemStore);

function sortByName(arr) {
    return arr.sort((a, b) => a[0].localeCompare(b[0]));
}

let sortedItemsArray = sortByName(itemsArray);

console.log("Item Store [Sorted by Name] : ", sortedItemsArray);



// Step 3 --- Binary Sort untuk pencarian Claymore.
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid][0] === target) {
            return mid;
        }

        if (arr[mid][0] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}



// Step 4 --- Pemanggilan Fungsi Binary untuk pencarian dan selanjutnya print Claymore
let claymoreIndex = binarySearch(sortedItemsArray, "Claymore");
if (claymoreIndex !== -1) {
    let claymorePrice = sortedItemsArray[claymoreIndex][1];

    if (initialGold >= claymorePrice) {
        console.log("Yes, Claymore is found, and you have enough gold to purchase it.")
    } else {
        console.log("The amount of gold is insufficient.")
    }
}
