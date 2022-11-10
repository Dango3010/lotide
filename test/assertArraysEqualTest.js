const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual([1, 2, 3], [1, 2, 3]); //pass
assertArraysEqual([1, 0, 3], [1, 2, 3]); // not pass 
assertArraysEqual([1, 0, 3], [1, 2, 3, 6]); //not pass