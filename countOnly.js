// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (let i = 0; i < allItems.length; i++) {
    for (const item in itemsToCount) {
      if (itemsToCount[item] && allItems[i] === item) { 
        if (results[item]) {
          results[item] += 1;
        } else {
          results[item] = 1; 
          // = create a keyword and assign the value of 1 at the same time
          // for the first time in the results object
        }
      }
    }
  }
  return results;
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`assertion passed`);
  } else {
    console.log(`🛑 ${actual} !== ${expected}`);
  }
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);