const eqArrays = require('./eqArrays');

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`assertion passed`);
  } else {
    console.log(`🛑 ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;

assertArraysEqual([1, 2, 3], [1, 2, 3]); //pass
assertArraysEqual([1, 0, 3], [1, 2, 3]); // not pass 
assertArraysEqual([1, 0, 3], [1, 2, 3, 6]); //not pass