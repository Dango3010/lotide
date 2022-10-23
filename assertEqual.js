const assertEqual = function(actual, expected) {
  console.assert(actual === expected, '🛑 ' + actual + ' !== ' + expected);
};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual("Bootcamp", "Bootcamp"));
console.log(assertEqual(2, 2));
console.log(assertEqual(2, 4));