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

module.exports = middle;
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');