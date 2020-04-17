// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// O(n) time and O(1) space?

var backspaceCompare = function(S, T) {
  // for each string, find the occurrences of '#' and remove the '#' and the previous letter

  // helper function to find the index of '#'
    let findIndexOf = (arr) => {
      return arr.indexOf('#');
    };

    // convert both strings to arrays to make them easier to work with
    S = S.split('');
    T = T.split('');

    // find the first index of '#' in each array
    let SIndex = findIndexOf(S);
    let TIndex = findIndexOf(T);

    // for the first string, while there is still a '#' in the string...
    while(SIndex > -1) {
      // if the '#' is not the first character in the array...
      if(SIndex - 1 >= 0) {
        // remove the character before, or one index to the left, of the '#'
        S.splice(SIndex - 1, 1);
        // '#' is now one index to the left, so remove the '#'
        S.splice(SIndex - 1, 1);
      } else {
        // if '#' is the first character, just remove the first character
        S.splice(SIndex, 1);
      }
      // find the next index of '#' if any
      SIndex = findIndexOf(S);
    };

    // for the second array, while there is still a '#' in the string...
    while(TIndex > -1) {
      // if the '#' is not the first character in the array...
      if(TIndex - 1 >= 0) {
        // remove the character before, or one index to the left, of the '#'
        T.splice(TIndex - 1, 1);
        // '#' is now one index to the left, so remove the '#'
        T.splice(TIndex - 1, 1);
      } else {
        // if '#' is the first character, just remove the first character
        T.splice(TIndex, 1);
      }
      // find the next index of '#' if any
      TIndex = findIndexOf(T);
    };

    // convert the arrays back to strings and compare
    if(S.join() === T.join()) {
      return true;
    };

    // if the strings are not equal, return false
    return false;
};

let st1 = "ab##";
let st2 = "c#d#";
console.log(backspaceCompare(st1, st2));

let st3 = "xywrrmp"
let st4 = "xywrrmu#p"
console.log(backspaceCompare(st3, st4));

let st5 = "a##c";
let st6 = "#a#c"
console.log(backspaceCompare(st5, st6));

let st7 = "y#fo##f";
let st8 = "y#f#o##f"
console.log(backspaceCompare(st7, st8));
