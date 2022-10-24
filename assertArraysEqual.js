let eqArrays = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        console.log('the two arrays are equal');
      } else {
        console.log('the two arrays are not equal');
      }
    }
  }
};

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 0, 3], [1, 2, 3]);