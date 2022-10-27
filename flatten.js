const flatten = (arra) => {
  let newarra = [];
  for (let i = 0; i < arra.length; i++) {
    if (Array.isArray(arra[i])) {
      for (let j = 0; j < arra[i].length; j++) {
        newarra.push(arra[i][j]);
      }
    } else {
      newarra.push(arra[i]);
    }
  }
  return newarra;
};

const old = [1, 2, [3, 4], 5, [6]];

console.log(flatten(old));