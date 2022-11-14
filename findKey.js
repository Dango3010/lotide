const findKey = (obj, callback) => {
  let arr = Object.keys(obj);
  for (let key of arr) {
    if (callback(obj[key])) {
      return key;
    }
  }
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`assertion passed`);
  } else {
    console.log(`🛑 ${actual} !== ${expected}`);
  }
};

const keyfound = findKey({
  "Blue Hill": { stars: 2 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) 
// output: "Blue Hill"

assertEqual(keyfound, "Bootcamp"); //not pass
assertEqual(keyfound, "Blue Hill"); //pass
assertEqual(keyfound, "noma"); //not pass
assertEqual(keyfound, ''); //not pass

module.exports = findKey;
