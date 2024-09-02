// -- Function
// function declaration -> fungsi yang dideklarasikan dengan kata kunci 'function'
function greet(name) {
  return "Hello ," + name;
}

// console.log(greet("John Doe"));
// console.log(greet("Jane Doe"));

function dailyShift(shift) {
  if (shift >= 9 && shift < 15) {
    return "Morning Shift";
  } else if (shift >= 15 && shift < 21) {
    return "Noon Shift";
  } else {
    return "Night Shift";
  }
}

// console.log(dailyShift(15));
// console.log(dailyShift(21));

function sumBetweenVariable(x, y) {
  //   console.log(x + y);
  return x + y;
}

let totalSum = 2 + sumBetweenVariable(2, 2);
// console.log(totalSum);

function checkPalindrome(targetStr) {
  let isPalindrome = true;
  let start = 0;
  let end = targetStr.length - 1;
  while (start < end) {
    if (targetStr[start] !== targetStr[end]) {
      isPalindrome = false;
      break;
    }
    start++;
    end--;
  }
  if (isPalindrome) {
    return "Palindrome";
  } else {
    return "Not a palindrome";
  }
}

// console.log(checkPalindrome("madam"));

// --- rest parameter
function sumTotal(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// console.log(sumTotal(1, 2, 3, 4));

// --- nested function
function outerFunction(x) {
  function innerFunction(y) {
    return x * y;
  }
  return innerFunction;
}

let addNumber = outerFunction(5);
// console.log(addNumber(8));

// --- closure function
function createCounter() {
  let count = 0;
  console.log("log initial value : ", count);
  return function () {
    console.log("before count : ", count);
    count++;
    console.log("after count : ", count);
    return count;
  };
}
let counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// --- recursive function -> memanggil fungsinya sendiri sampai kondisi tertentu terpenuhi
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
    // 5 x factorial(5-1) = 5x4
    // 4 x factorial(4-1) = 5x4x3
    // 3 x factorial(3-1) = 5x4x3x2
    // 2 x factorial(2-1) = 5x4x3x2x1
    // 1 x factorial(1-1) = 5x4x3x2x1
  }
}

console.log(factorial(5));
