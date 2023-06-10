function frequencyCounter(word){
  const counter = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (counter.hasOwnProperty(letter)) {
      counter[letter]++;
    } else {
      counter[letter] = 1;
    }
  }

  return counter;
}

console.log(frequencyCounter('Jersey Mikessss'));

// Do not edit this line;
module.exports = frequencyCounter;