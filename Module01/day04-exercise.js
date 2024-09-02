// -- create triangle

function createTriangle(height) {
  let number = 1;
  for (let i = 1; i <= height; i++) {
    let row = "";
    // console.log(i);
    for (let j = 1; j <= i; j++) {
      //   console.log(" ------- ", j);
      row += (number < 10 ? "0" : "") + number + " ";
      //   console.log(row);
      number++;
    }
  }
  return row;
}

// console.log(createTriangle(4));

// -- fizzbuzz

function fizzBuzz(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(15);

// -- BMI
function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 30 && bmi <= 39.9) {
    return "overweight";
  } else {
    return "obesity";
  }
}

// console.log(calculateBMI(70, 1.75));

// -- remove odd numbers
function removeOddNumbers(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      results[results.length] = arr[i];
    }
  }
  return results;
}
let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log(removeOddNumbers(arrNumber));

// -- convert string to array
function splitStringToArray(str) {
  let results = [];
  let word = "";
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === " " || i === str.length) {
      results[results.length] = word;
      word = "";
    } else {
      word += str[i];
    }
  }
  return results;
}

const str = "Hello World";
console.log(splitStringToArray(str));
