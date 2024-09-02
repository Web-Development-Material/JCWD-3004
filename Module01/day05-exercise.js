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
