function sumOfMinimumAndMaximum(nums) {

  let max = nums[0];
  let min =  nums[0];
  //finding max
  for(let i = 0; i < nums.length; i++){
    max = nums[0];
    if(nums[i] > max){
      max = nums[i];
    }
  }

  //finding min
  for(let i = 0; i < nums.length; i++){
    min = nums[0];
    if(nums[i] < min){
      min = nums[i];
    }
  }

  return max + min;
}

console.log(sumOfMinimumAndMaximum([23,22,42,44,1,20]))
// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;