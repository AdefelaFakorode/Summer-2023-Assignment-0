function sumOfNumsWithinARange(nums, start, end) {
  let sum = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] >= start && nums[i] <= end){
      sum += nums[i];
    }
  }
  return sum;
}

console.log(sumOfNumsWithinARange([1,2,3,4,5],2,4))

// Do not edit this line;
module.exports = sumOfNumsWithinARange;