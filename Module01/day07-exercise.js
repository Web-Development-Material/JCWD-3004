// -- check equal object
function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

// console.log(areObjectsEqual({ a: 2 }, { a: 1 }));
// console.log(areObjectsEqual({ a: "Hello World" }, { a: 1 }));
// console.log(areObjectsEqual({ a: 1 }, { a: 1 }));

// -- intersection object
function getObjectIntersection(obj1, obj2) {
  let result = {};

  for (let key in obj1) {
    if (obj1[key] === obj2[key]) {
      result[key] = obj1[key];
      console.log(result[key]);
    }
  }
  return result;
}

let obj1 = { a: 1, b: 2 };
let obj2 = { a: 1, b: 3 };
// console.log(getObjectIntersection(obj1, obj2));

// -- merge student data
function mergeStudentData(array1, array2) {
  let result = [];

  // looping array1
  for (let i = 0; i < array1.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (
        array1[i].name === result[j].name &&
        array1[i].email === result[j].email
      ) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(array1[i]);
    }
  }

  // looping array2
  for (let i = 0; i < array2.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (
        array2[i].name === result[j].name &&
        array2[i].email === result[j].email
      ) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(array2[i]);
    }
  }

  return result;
}

let array1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
let array2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

// console.log(mergeStudentData(array1, array2));

// -- switch property and value
function switchPropertyAndValue(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const obj = array[i];
    const newObj = {};
    for (let key in obj) {
      newObj[obj[key]] = key;
    }
    result.push(newObj);
  }
  return result;
}

console.log(switchPropertyAndValue([{ name: "David", age: 20 }]));
