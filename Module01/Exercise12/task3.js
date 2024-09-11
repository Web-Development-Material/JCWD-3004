function pascalTriangle(nums) {
  let triangle = [];
  for (let i = 0; i < nums; i++) {
    let row = [];
    row[0] = 1;
    row[i] = 1;
    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    triangle.push(row);
  }
  return triangle
}
console.log(pascalTriangle(5));
