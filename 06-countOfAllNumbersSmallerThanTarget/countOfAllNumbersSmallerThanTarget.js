function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0;

  for(let i = 0; i < nums.length; i++){
    if(nums[i] < target){
      count++;
    }
  }
  return count;
}

console.log(countOfAllNumbersSmallerThanTarget([1,2,3,4,5,22,60,88,30],9))
// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;