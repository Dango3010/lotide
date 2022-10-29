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

console.log(countLetters('LHL    '));
console.log(countLetters('lighthouse in the house'));