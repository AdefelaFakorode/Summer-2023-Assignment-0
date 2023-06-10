function setUnionOfAnyAmountOfSets(...args) {
  const unionSet = new Set();

  for (let set of args) {
    for (let item of set) {
      unionSet.add(item);
    }
  }

  return unionSet;
}

const set1 = new Set([1, 2, 4]);
const set2 = new Set([4, 5, 6]);
const set3 = new Set([6, 7, 8]);

const result = setUnionOfAnyAmountOfSets(set1, set2, set3);
console.log(result);

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;