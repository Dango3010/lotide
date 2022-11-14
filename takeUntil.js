const takeUntil = function(array, callback) {
  let news = [];
  for (item of array) {
    if (!callback(item)) {
      news.push(item);
    } else {
      break;
    }
  }
  return news;
}

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

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`assertion passed`);
  } else {
    console.log(`🛑 ${actual} !== ${expected}`);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results1, [ 1, 2, 5,]);
assertArraysEqual(results1, []);

module.exports = takeUntil;