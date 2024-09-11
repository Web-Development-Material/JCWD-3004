function majority(nums) {
  let majorNum = nums[0];
  let count = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === majorNum) {
      count++;
    } else if (count === 0) {
      majorNum = nums[i];
      count = 1;
    } else {
      count--;
    }
  }
  return majorNum
}
console.log(majority([2,2,1,1,1,2,2]))