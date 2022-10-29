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
//remove all exceptions first, then return true for other cases.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`assertion passed`);
  } else {
    console.log(`🛑 ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// pass
assertEqual(eqArrays([1, 0, 3], [1, 2, 3]), false);
// pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 6]), false);
// pass