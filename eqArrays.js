let eqArrays = (array1, array2) => {
  let x = '';
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        x = true;
      } else {
        x = false;
      }
    }
  }
  return x;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`assertion passed`);
  } else {
    console.log(`🛑 ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// should pass
assertEqual(eqArrays([1, 0, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);