const middle = (arra) => {
  let midd = [];
  let leng = arra.length / 2;
  if (arra.length <= 2) {
    return midd;
  } else if (leng % 2 === 0) {
    midd.push(arra[leng - 1], arra[leng]);
    return midd;
  } else {
    midd.push(arra[Math.floor(leng)]);
    return midd;
  }
};


const assertArraysEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    return `the two arrays are not equal`;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return `the two arrays are not equal`;
    }
  }
  return `the two arrays are equal`;
};

console.log(assertArraysEqual(middle([1, 2]), []));
// equal
console.log(assertArraysEqual(middle([1, 2, 3, 8, 9]), [3]));
// equal
console.log(assertArraysEqual(middle([1, 2, 10, 4]), [2, 10]));
// equal
