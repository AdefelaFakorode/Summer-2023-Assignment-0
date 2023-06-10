function countOfAllBooleansAndStrings(arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === "boolean" || "string"){
       count ++;
    }
  }
  return count;
}

console.log(countOfAllBooleansAndStrings(["hey", "there", "hello", "there", "world", false]));
// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;