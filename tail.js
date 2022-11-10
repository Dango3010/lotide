let tail = (array) => {
  let a = [];
  for (let i = 1; i < array.length; i++) {
    a.push(array[i]);
  }
  return a;
};

const assertEqual = require('./assertEqual');
module.exports = tail;
