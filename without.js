const without = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr1.splice(i,1);
      }
    }
  }
  return arr1;
}

const assertArraysEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    return `the two arrays are not equal`;
  };
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return `the two arrays are not equal`;
    }
  }
  return `the two arrays are equal`;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["world"]);

console.log(words);
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
// result: are not equal

module.exports = without;