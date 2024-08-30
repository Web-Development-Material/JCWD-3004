// check palindrome
let targetStr = "maddam";
let isPalindrome = true;
let start = 0;
let end = targetStr.length - 1;

// while (start < end) {
//   if (targetStr[start] !== targetStr[end]) {
//     isPalindrome = false;
//     break;
//   }
//   start++;
//   end--;
// }

// console.log(isPalindrome ? "Palindrome" : "Not a palindrome");

// convert from number to currency
let targetNumber = 1000;
let convertedToRupiah =
  "Rp. " + (targetNumber / 1000).toFixed(3).replace(".", ",") + ",00";
// console.log(convertedToRupiah);

// capitalize first letter
let targetCapitalize = "hello world";
let resultCapitalize = "";

// for (let i = 0; i < targetCapitalize.length; i++) {
//   if (i === 0 || targetCapitalize[i - 1] === " ") {
//     resultCapitalize += targetCapitalize[i].toUpperCase();
//     // console.log("capitalize : ", resultCapitalize);
//   } else {
//     resultCapitalize += targetCapitalize[i];
//     // console.log("non capitalize : ", resultCapitalize);
//   }
// }

// console.log(resultCapitalize);

// convert uppercase to lowercase, lowercase to uppercase
let targetConvert = "The QuiCk BrOwN Fox";
let result = "";

for (let i = 0; i < targetConvert.length; i++) {
  if (targetConvert[i] >= "A" && targetConvert[i] <= "z") {
    result += targetConvert[i].toUpperCase();
  } else if (targetConvert[i] >= "A" && targetConvert[i] <= "Z") {
    result += targetConvert[i].toLowerCase();
  } else {
    result += targetConvert[i];
  }
}

console.log(result);
