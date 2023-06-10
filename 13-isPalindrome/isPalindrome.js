function isPalindrome(word) {
  let stack = []; //pushing in stack
  for(let i = 0; i < word.length; i++){
    stack.push(word[i])
  }

  let revWord = '';

  while(stack.length > 0){ //popping out stack
    revWord += stack.pop();
  }

  return word === revWord;
}

console.log(isPalindrome('racecar'));

// Do not edit this line;
module.exports = isPalindrome;