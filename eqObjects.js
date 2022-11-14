// two objects are equal when:
// 1. They have the same number of keys,
// 2. The value for each key in one object is the same as the value for that same key in the other object

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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`assertion passed`);
  } else {
    console.log(`🛑 ${actual} !== ${expected}`);
  }
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
  // Our control flow onlly gets to the end of the loop if all the keys matched.
  // so we should return true at the end (after the loop)
};

const ab = { house: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);
// not pass

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), true);
// not pass

const cd = { c: "1", d: ["8", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);
// not pass

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), true);
// not pass

module.exports = eqObjects;