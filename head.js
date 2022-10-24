let head = (array) => {
  let x = array[0];
  return x;
}

const assertEqual = function(x, expected) {
  if (x === expected) {
    console.log(`assertion passed`);
  } else {
    console.log(`🛑 ${x} !== ${expected}`);
  }
};

assertEqual(head([5,6,7]), 8);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]));
assertEqual(head([1]), 1);