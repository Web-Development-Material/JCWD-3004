// task1

function excelColumnToNumber(columnTitle) {
  let result = 0;
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < columnTitle.length; i++) {
    let currentValue = alphabet.indexOf(columnTitle[i]) + 1;
    console.log("current value : ", currentValue);
    result = result * 26 + currentValue;
    console.log("result value : ", result);
  }

  return result;
}

// console.log(excelColumnToNumber("A"));
// console.log(excelColumnToNumber("Z"));
// console.log(excelColumnToNumber("AA"));
// console.log(excelColumnToNumber("AB"));

// task2

function findUniqueElement(nums) {
  let totalUnique = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count === 1) {
      totalUnique.push(nums[i]);
    }
  }
  if (totalUnique.length === 1) {
    return totalUnique[0];
  }

  return totalUnique;
}

// console.log(findUniqueElement([2, 2, 1]));
// console.log(findUniqueElement([4, 1, 2, 1, 2]));
// console.log(findUniqueElement([1]));
// console.log(findUniqueElement([2, 3, 1]));

// task 3

function checkAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let countS = {};
  let countT = {};

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    // menghitung karakter pada string s
    if (countS[charS]) {
      countS[charS]++;
    } else {
      countS[charS] = 1;
    }

    // menghitung karakter pada string t
    if (countT[charT]) {
      countT[charT]++;
    } else {
      countT[charT] = 1;
    }
  }

  // membandingkan jumlah kemunculan setiap karakter di kedua objek
  for (let key in countS) {
    if (countS[key] !== countT[key]) {
      return false;
    }
  }

  return true;
}

const source1 = "anagram";
const target1 = "nagaram";

const source2 = "rat";
const target2 = "car";
// console.log(checkAnagram(source1, target1));
// console.log(checkAnagram(source2, target2));

// task4
function climbStairs(n) {
  if (n <= 2) {
    return n;
  }

  let oneStepBefore = 2; // cara mencapai n-1
  let twoStepBefore = 1; // cara mencapai n-2
  let totalStep = 0;

  for (let i = 3; i <= n; i++) {
    totalStep = oneStepBefore + twoStepBefore;
    twoStepBefore = oneStepBefore;
    oneStepBefore = totalStep;
  }

  return totalStep;
}

console.log(climbStairs(1));
console.log(climbStairs(2));
// console.log(climbStairs(3));
// console.log(climbStairs(4));
// console.log(climbStairs(5));
// console.log(climbStairs(6));
