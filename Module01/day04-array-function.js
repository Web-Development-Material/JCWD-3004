// -- Array
// pop -> menghapus elemen terakhir dari sebuah array
let fruits = ["Apple", "Banana", "Orange"];
console.log("Before pop : ", fruits);
fruits.pop();
console.log("After pop : ", fruits);

// push -> menambahkan satu atau lebih elemen ke akhir array
fruits.push("Grapes");
console.log("After push last element : ", fruits);

// shift -> menghapus satu elemen pertama dari sebuah array
fruits.shift();
console.log("After shift first element : ", fruits);

// unshift -> menambahkan satu elemen pertama dari sebuah array
fruits.unshift("Mango");
console.log("After unshift first element : ", fruits);

// untuk mengubah nilai dalam index tertentu
let year = [2020, 2021, 2022, 2023, 2024];
year[1] = 1999;
console.log("After change index-1 : ", year);

// join -> menggabungkan semua elemen dalam array jadi string
let fruitString = fruits.join();
console.log("After joining fruits : ", fruitString);

// concat -> menggabungkan dua atau lebih array menjadi satu array baru
let moreFruits = ["Pineapple", "Watermelon"];
let combined = fruits.concat(moreFruits);
console.log("After concating 'fruits' with 'moreFruits' : ", combined);

// splice -> menambahkan atau menghapus elemen di tengah array
combined.splice(1, 3, "Peach");
console.log("After spliced : ", combined);

// map -> membuat array baru dengan hasil dari memanggil array sebelumnya
let mappedCapitalizeFruit = combined.map((fruit) => fruit.toUpperCase());
console.log("After map : ", mappedCapitalizeFruit);

// forEach -> memanggil array tanpa membuat array baru
combined.forEach((fruit) => fruit.toUpperCase());
console.log("After for each : ", combined);

// case 1 : list of names
const listNames = [
  {
    name: "John Doe",
    age: 29,
  },
  {
    name: "Jane Doe",
    age: 28,
  },
];

let fullListNames = listNames.map((item) => item);
console.log("full data : ", fullListNames);
let listOfNames = listNames.map((item) => item.name);
console.log("list of names : ", listOfNames);
let listOfAges = listNames.map((item) => item.age);
console.log("list of ages : ", listOfAges);

// includes -> memeriksa apakah array berisi elemen tertentu, mengembalikan nilai true atau false
// includes -> case sensitive!
// console.log("list of combined element : ", combined);
// let checkElement = combined.includes("Peach"); -> akan mengembalikan true karena Peach ada
// let checkElement = combined.includes("Banana"); -> akan mengembalikan false karena Banana tidak ada
// console.log("check element : ", checkElement);

// for of -> looping khusus untuk array
let randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let randomFruits = ["Watermelon", "Mango", "Dragon Fruits"];
for (let index of randomFruits) {
  console.log(index);
}
