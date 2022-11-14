//find the # with highest frequency in an array
const mode = function(arr) {
  let maxfreq = 0;
  let maxnum = 0;
  for (element of arr) {
    let freq = 0;
    for (let i = 0; i < arr.length; i++) {
      if (element === arr[i]) {
        freq++;
      }
    }
    if (freq > maxfreq) {
      maxfreq = freq;
      maxnum = element;
    }
  }
  return maxnum;
};

console.log(mode([6,9,3,9, 9,6,1,0,5])); //9

module.exports = mode;