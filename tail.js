let tail = (array) => {
  let a = [];
  for (let i = 1; i < array.length; i++) {
    a.push(array[i]);
  }
  return a;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`assertion passed`);
  } else {
    console.log(`🛑 ${actual} !== ${expected}`);
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
const empty = tail([]);

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");