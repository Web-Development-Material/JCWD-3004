// task 1
function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// task 2
function romanToInt(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    console.log("romanMap[s[i]] : ", romanMap[s[i]]);
    // jika simbol saat ini lebih kecil dari simbol berikutnya, kita kurangi
    if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
      total -= romanMap[s[i]];
    } else {
      // jika tidak, tambahkan nilainya
      total += romanMap[s[i]];
    }
  }
  return total;
}

// console.log(romanToInt("III"));
// console.log(romanToInt("MCMXCIV"));

// task 3
function generate(numRows) {
  let pascalTriangle = [];

  for (let i = 0; i < numRows; i++) {
    let row = [];
    row.push(1);
    for (let j = 1; j < i; j++) {
      row.push(pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j]);
    }
    if (i > 0) {
      row.push(1);
    }
    pascalTriangle.push(row);
  }
  return pascalTriangle;
}

// console.log(generate(5));

// task 4

function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // kalau kita menemukan harga yang lebih rendah, update minPrice nya
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      // kalau harga saat ini lebih tinggi, kita hitung potensi profit
      const profit = prices[i] - minPrice;
      // update maxProfit jika profit lebih besar
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
