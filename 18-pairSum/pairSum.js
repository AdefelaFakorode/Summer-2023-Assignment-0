function pairSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(pairSum([0,1,2,3,4,5], 8));

// Do not edit this line;
module.exports = pairSum;