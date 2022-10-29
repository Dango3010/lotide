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

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 0, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 0, 3], [1, 2, 3, 6]));