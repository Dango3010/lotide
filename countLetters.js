const countLetters = (string) => {
  let count = {};
  for (letter of string) {
    if (letter !== ' ' && count[letter]) {
      count[letter] += 1;
    } else if (letter !== ' ' && !count[letter]) {
      count[letter] = 1;
    }
  }
  return count;
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`assertion passed`);
  } else {
    console.log(`🛑 ${actual} !== ${expected}`);
  }
};

let a = countLetters('lighthouse in the house');
console.log(a);
assertEqual(a["l"], 1);
assertEqual(a["h"], 4);
assertEqual(a["u"], 2);