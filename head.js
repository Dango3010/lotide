let head = (array) => {
  let x = array[0];
  return x;
}

const assertEqual = function(x, expected) {
  console.assert(x === expected, `🛑 ${x} !== ${expected}`);
};

console.log(assertEqual(head([5,6,7]), 8));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([])));
console.log(assertEqual(head([1]), 1));
