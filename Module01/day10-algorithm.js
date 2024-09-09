// Time Complexcity O(n) - Linear
// -- menghitung jumlah total dari sebuah harga barang
// -- Space Complexcity O(1) karena tidak ada penambahan memori atau ruang
function calculateTotalPrice(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i]; // operasi ini dilakukan N kali, dimana N adalah panjang array
  }
  return total;
}

let prices = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100];
// console.time("time of execution calculateTotalPrice()");
// console.log("Total Prices : ", calculateTotalPrice(prices));
// console.timeEnd("time of execution calculateTotalPrice()");

// Space Complexcity O(n)
// -- membuat array yang menyimpan angka ganjil dari 1 hingga N
// -- Time Complexcity O(n) karena ada penambahan waktu ketika N dilooping
function generateOddNumbers(n) {
  let oddNumbers = [];
  for (let i = 1; i <= n; i += 2) {
    oddNumbers.push(i);
  }
  return oddNumbers;
}

// console.time("time of execution generateOddNumbers()");
// console.log(generateOddNumbers(10));
// console.timeEnd("time of execution generateOddNumbers()");

// Brute Force
// -- mencoba berbagai macam kemungkinan
// mencari sebuah string dalam teks

function bruteForceSearch(text, pattern) {
  for (let i = 0; i <= text.length - pattern.length; i++) {
    let found = true;
    for (let j = 0; j < pattern.length; j++) {
      if (text[i + j] !== pattern[j]) {
        found = false;
        break;
      }
    }
    if (found) return i;
  }
  return -1;
}

// let text = "Brute force is simple but inefficient";
// let pattern = "force";
// console.log(bruteForceSearch(text, pattern)); // output -> 6

// menemukan dua angka dari elemen array yang jumlahnya sama dengan target
function bruteForceTwoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]; // mengembalikan indeks dari dua angka tersebut
      }
    }
  }
  return []; // jika tidak ada yang membentuk target
}

let numbers = [2, 7, 11, 15];
let target = 9;

// console.log(bruteForceTwoSum(numbers, target));

// menghitung jumlah kemunculan angka dalam array
// -- With Extra Memory
function countFrequencyWithExtraMemory(arr) {
  let frequency = {};
  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]] += 1;
    } else {
      frequency[arr[i]] = 1;
    }
  }
  return frequency;
}

let arr1 = [10, 22, 30, 88, 10, 20, 22, 30, 40, 40, 8, 7, 11, 10, 8];
// console.time("execution time for countFrequencyWithExtraMemory()");
// console.log(countFrequencyWithExtraMemory(arr1));
// console.timeEnd("execution time for countFrequencyWithExtraMemory()");

function countFrequencyWithoutExtraMemory(arr) {
  arr.sort();
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      console.log(arr[i - 1] + " muncul " + count + " kali.");
      count = 1;
    }
  }
  return arr[arr.length - 1] + " muncul " + count + " kali.";
}

let arr2 = [10, 22, 30, 88, 10, 20, 22, 30, 40, 40, 8, 7, 11, 10, 8];
// console.time("execution time for countFrequencyWithoutExtraMemory()");
// console.log(countFrequencyWithoutExtraMemory(arr2));
// console.timeEnd("execution time for countFrequencyWithoutExtraMemory()");

// Search Algorithms
// -- Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let data1 = [10, 21, 30, 11, 40, 5, 90, 77, 65, 57];
// console.log(linearSearch(data1, 40));

// -- Binary Search
function binarySearch(arr, target) {
  let low = 0; // indeks awal
  let high = arr.length - 1; // indeks akhir
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // menentukan elemen tengah
    if (arr[mid] === target) {
      return mid; // jika elemen tengah sama dengan target, maka kembalikan indeksnya
    }
    if (arr[mid] < target) {
      low = mid + 1; // jika elemen tengah lebih kecil, pindah ke bagian kanan
    } else {
      high = mid - 1; // jika elemen tengah lebih besar, pindah ke bagian kiri
    }
  }
  return -1; // jika target tidak ditemukan
}

let sortedData = [1, 3, 3, 5, 7, 8, 10, 19, 22, 30, 38, 44, 50];
// console.log(binarySearch(sortedData, 3));

// -- Built In Search
let data2 = [10, 5, 9, 8, 11, 90, 80];
let searchData = data2.indexOf(5);
// console.log(searchData);

// Sorting Algorithms
// -- Bubble Sort

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false; // asumsikan pada awalnya tidak ada elemen yang ditukar
    for (let i = 0; i < arr.length; i++) {
      // jika elemen saat ini lebih besar dari elemen berikutnya, maka tukar posisi
      if (arr[i] > arr[i + 1]) {
        // tukar elemen
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped); // iterasi ulang jika ada elemen yang ditukar
  return arr; // kembalikan array yang sudah terurut
}

let unsortedData1 = [5, 1, 4, 2, 8];
// console.log(bubbleSort(unsortedData1));

// -- Selection Sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // asumsikan elemen saat ini adalah elemen terkecil
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // update indeks elemen terkecil
      }
    }
    // jika elemen terkecil ditemukan, tukar dengan elemen di posisi i
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // tukar elemen
    }
  }
  return arr;
}

let unsortedData2 = [64, 25, 12, 22, 11];
console.log(selectionSort(unsortedData2));
