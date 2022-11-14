// SUPPORTING FUNCTIONS
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

const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let key of arr1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      let compare = eqArrays(object1[key], object2[key]);
      if (compare === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// OUR FUNCTION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // to avoid [object Object] === [object Object] shown up in the terminal
  if (eqObjects(actual, expected)) {
    console.log(`assertion passed`);
  } else {
    console.log(`🛑 ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TESTNG
const cd = { home: "1", d: ["8", 3] };
const dc = { d: ["8", 3], home: "1" };
assertObjectsEqual(cd, dc);
// pass

module.exports = eqObjects;
module.exports = assertObjectsEqual;