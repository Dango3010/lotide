const assertArraysEqual = require('../assertArraysEqual'); //don't have to require eqArrays func as well.
const middle = require('../middle');

assertArraysEqual(middle([1, 2]), []); // pass
assertArraysEqual(middle([1, 2, 3, 8, 9]), [3]); // pass
assertArraysEqual(middle([1, 2, 10, 4]), [2, 10]); // pass

