//roman
function romanToInt(s) {
  let romanNumeral = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let current = romanNumeral[s[i]];
    let next = romanNumeral[s[i + 1]];
    if (next > current) {
      sum -= current;
    } else {
      sum += current;
    }
  }
  return sum;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
