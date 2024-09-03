// -- insert to array
function insertToArray(maxSize, ...numbers) {
  const results = [];

  for (let i = 0; i < numbers.length; i++) {
    if (results.length < maxSize) {
      results.push(numbers[i]);
    } else {
      break;
    }
  }
  return results;
}

const maxSize = 5;
// console.log(insertToArray(maxSize, 5, 10, 24, 3, 6, 7, 8));

// -- add unique element
function addUniqueElement(arr, newElement) {
  if (arr.indexOf(newElement) === -1) {
    arr.push(newElement);
  }
  return arr;
}

const newElement = 4;
const arr = [1, 2, 3, 4];
// console.log(addUniqueElement(arr, newElement));

// -- count duplicate
function sumOfDuplicates(arr) {
  let sum = 0;
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      seen[arr[i]]++;
      // console.log(seen);
    } else {
      seen[arr[i]] = 1;
    }
  }
  for (let key in seen) {
    console.log(key + " muncul " + seen[key] + " kali ");
    if (seen[key] > 1) {
      sum += Number(key) * seen[key];
    }
  }
  return sum;
}
let arr2 = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(sumOfDuplicates(arr2));
