// check even/odd number
let number = 25;
// if (number % 2 == 0) {
//   console.log(number + " -> even number ");
// } else {
//   console.log(number + " -> odd number ");
// }

// check prime/not prime
let targetNumber = 7;
let isPrime = true;

// if (targetNumber < 2) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < targetNumber; i++) {
//     if (targetNumber % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// if (isPrime) {
//   console.log(targetNumber + " -> " + targetNumber + " is a prime number");
// } else {
//   console.log(targetNumber + " -> " + targetNumber + " is not a prime number");
// }

// check number from 1 to N
let N = 5;
let sum = 0;
// for (let i = 0; i <= N; i++) {
//   sum += i;
//   console.log(sum);
// }
// console.log(N + " -> " + sum);

// let numVar = 10;
// numVar += 1;
// numVar = numVar + 1

// numVar -= 1
// numVar = numVar - 1

// counting factorial numbers
// let inputFact = 4;
// let factorial = 1;
// for (let i = inputFact; i > 0; i--) {
//   console.log(i);
//   factorial *= i;
//   // factorial = factorial * i
// }
// console.log(inputFact + "! -> " + factorial);

// counting fibonacci number
let fibonacciLimit = 15;
let a = 0,
  b = 1;
let fibonacciSquare = [];

for (let i = 0; i <= fibonacciLimit; i++) {
  fibonacciSquare.push(a);
  let temp = a;
  a = b;
  b = temp + b;
}

console.log(fibonacciLimit + " -> " + fibonacciSquare.join(", "));
console.log(fibonacciSquare.length);
