const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// pass
assertEqual(eqArrays([1, 0, 3], [1, 2, 3]), false);
// pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 6]), false);
// pass