// --- Primitive data types
let numberVar = 42;
let stringVar = "Hello";
let booleanVar = true;
let nullVar = null;
let undefinedVar;

// console.log(typeof numberVar);
// console.log(typeof stringVar);
// console.log(typeof booleanVar);
// console.log(typeof nullVar);
// console.log(typeof undefinedVar);

// --- Collective data types
let arrayNumberVar = [1, 2, 3, 4, 5];
let arrayStringVar = ["Hello", "World"];
let person = {
  name: "John Doe",
  age: 30,
};

// console.log(arrayNumberVar);
// console.log(arrayStringVar);
// console.log(person);

// --- Contoh perbedaan var, let, dan const
if (true) {
  var varVariable =
    "saya dapat diakses dimana aja dalam fungsi atau global scope";
  let letVariable = "saya hanya dapat diakses dalam block ini";
  const constVariable =
    "saya juga hanya dapat diakses dalam block ini dan tidak bisa diubah";
}

varVariable = 123;
// console.log(varVariable);

let numberVariable = 123;
numberVariable = 456;
// console.log(numberVariable);

const numberRandom = 123;
// numberRandom = 345;
// console.log(numberRandom);

// --- Contoh Mutable dan Immutable

// Mutable : data bisa diubah
// -- contoh mutable
let mutableArray = [1, 2, 3];
mutableArray.unshift(0);
// console.log(mutableArray);
mutableArray.push(4);
// console.log(mutableArray);

// -- cara membaca index dari data array
// console.log(mutableArray[0]);
// console.log(mutableArray[3]);
// console.log(mutableArray[5]);

// Immutable : data tidak bisa diubah
// -- contoh immutable
const immutableString = "Hello";
immutableString[0] = "h";
// console.log(immutableString[0]);
// console.log(immutableString[1]);
// console.log(immutableString[2]);
// console.log(immutableString[3]);
// console.log(immutableString[4]);

// --- Contoh Unary, Binary, dan Operand
let numberChar = 20; // --> operand
let unary = -numberChar; // --> unary operator, memiliki satu operand
let binary = numberChar + 5; // --> binary operator, memiliki dua operand

// --- Contoh Operator
let sum = numberChar + 10;
let decrease = numberChar - 10;
let square = numberChar * 10;
let divide = numberChar / 10;
let modulo = numberChar % 10;

// --- Contoh Increment, Decrement, Postfix dan Prefix
let x = 5;
// console.log(x++); // postfix increment, x naik sebelum statement dieksekusi
// console.log(x);
// console.log(++x); // prefix increment, x naik sesudah statement dieksekusi
// console.log(x);
// console.log(x--); // postfix decrement
// console.log(x);
// console.log(--x); // prefix decrement

// --- Contoh Operator Perbandingan

// = -> assignment, memberikan nilai
// == -> loose equality, membandingkan kedua nilai yang sama
// === -> strict equality, membandingkan kedua nilai dan tipe data

let isEqual = 5 == "5";
let isStrictEqual = 5 === "5";
let isNotEqual = 5 != "5";
let isStrictNotEqual = 5 !== "5";
let isGreaterThan = 10 > 5;
let isLessThan = 5 < 10;

// console.log(isEqual);
// console.log(isStrictEqual);
// console.log(isNotEqual);
// console.log(isStrictNotEqual);

// --- Builtin Method (String)
// -- slice -> mengembalikan bagian tertentu dari string berdasarkan index awal dan akhir (akhir tidak termasuk)
let str = "Hello, World!";
let slicedStr = str.slice(7, 12);
let slicedStrNegative = str.slice(-1, 8);
// console.log(slicedStr);
// console.log(slicedStrNegative);

// -- substring -> sama seperti slice
let substringStr = str.substring(7, 12);
let substringStrNegative = str.substring(-1, 8);
// console.log(substringStr);
// console.log(substringStrNegative);

// -- substr -> mengambil bagian dari string, tetapi parameter kedua adalah panjang bagian yang akan diambil
let substrStr = str.substr(7, 5);
// console.log(substrStr);

// -- replace -> menggantikan bagian tertentu dari string dengan string yang baru
let replaceStr = str.replace("World", "Javascript");
// console.log(replaceStr);

// -- concat -> menggabungkan dua atau lebih string jadi satu string
let str1 = "Hello";
let str2 = "World";
let concatStr = str1.concat(", ", str2, "!");
// console.log(concatStr);

// -- trim -> menghapus spasi di awal dan akhir string
let strWithSpaces = "     Hello, World!     ";
let trimmedStr = strWithSpaces.trim();
// console.log(trimmedStr);

// --- Builtin Method (Number)
let number = 123.456;

// toFixed -> membulatkan angka ke jumlah desimal dan mengembalikan string
let roundedNumber = number.toFixed(2);
// let parsedRoundedNumber = parseInt(roundedNumber); // -> mengembalikan string menjadi number semula, dan menghilangkan desimal
// console.log(typeof parsedRoundedNumber);
// console.log(parsedRoundedNumber);
let convertedNumber = Number(roundedNumber); // -> konversi string ke number tanpa menghilangkan desimal
// console.log(convertedNumber);

// toString/String -> mengembalikan string, tanpa harus membulatkan angka ke jumlah desimal
// let numberAsString = number.toString();
let numberAsString = String(number);
// console.log(numberAsString);

// --- Builtin Method (Date)
let currentDate = new Date();
// console.log(currentDate);
let convertString = String(currentDate); // -> untuk mencetak tanggal dan tempat yang sesuai
// console.log(convertString);

// getFullYear() -> mengambil tahun
let year = currentDate.getFullYear();
// console.log(year);

// getMonth() -> mengambil bulan
let month = currentDate.getMonth();
// console.log(month);

// getDate() -> mengambil tanggal dalam hari
let date = currentDate.getDate();
// console.log(date);

// getDay() -> mengambil hari dalam minggu (0 = Minggu, 6 = Sabtu)
let dayOfWeek = currentDate.getDay();
// console.log(dayOfWeek);

// --- Gerbang Logika

// -- gerbang AND (&&)
// false + false = false
// false + true = false
// true + false = false
// true + true = true

// -- gerbang OR (||)
// false + false = false
// false + true = true
// true + false = true
// true + true = true

// -- gerbang NOT (!)
// false = true
// true = false

let statement1 = 10 < 19;
let statement2 = 30 != "30";
let statement3 = 2 > 5;
let statement4 = 30 === "30";

// console.log(statement1 && statement4);
// console.log(statement3 || statement2);
// console.log(!statement4 && statement2);
