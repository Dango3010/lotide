let eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`assertion passed`);
  } else {
    console.log(`🛑 ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  let result = {};
  let index = 0;
  for (let letter of sentence) {
    if (letter === ' ') {

    } else if (result[letter] === undefined) {
      result[letter] = [index];
    } else {
      result[letter].push(index);
    }
    index++;
  }
  return result;
};

const a = letterPositions('lighthouse in the house');

assertArraysEqual(a['h'],[3, 5, 15, 18]);
assertArraysEqual(a["o"], [6, 19]);
assertArraysEqual(a["u"], [ 7, 20 ]);

module.exports = letterPositions;