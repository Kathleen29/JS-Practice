// Shuffle an array in place with a "uniform" shuffle (each item in the original array has the same probability of ending up in each spot in the final array)

// returns a random number between the lowest possible index and the last possible
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function inPlaceShuffle(arr) {
  // calculate the last index in the array
  let lastIndex = arr.length - 1;
  let randomIndex;
  // for each element in the array...
  for(let i = 0; i < lastIndex; i++) {
    // get a random index between the current index (i) and the last index
    randomIndex = getRandom(i, lastIndex);
    // if the random index is not equal to the current index
    if(randomIndex !== i) {
      // swap the element at the current index with the element at the random index
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    };
  };
  // return the shuffled array
  return arr;
};

console.log(inPlaceShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
