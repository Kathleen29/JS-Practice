// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:

//   [1, 7, 3, 4]

// your function would return:

//   [84, 12, 28, 21]

// by calculating:

//   [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

// Here's the catch: You can't use division in your solution!

// 123 023 013 012

// [1, 2, 3, 4, 5]
// 120 60 40 30 24
// 1234 0234 0134 0124 0123

function getProductsOfAllIntsExceptAtIndex(arr) {
  // set a variable named prevProduct to store the product of the previous numbers
  var prevProduct = 1;
  // set a variable named nextProduct to store the product of the next numbers
  var nextProduct = 1;
  // set a variable to an empty array to store the products
  var products = [];
  // for each element in the array
  for(let i = 0; i < arr.length - 1; i++) {
    // find the product of the numbers after the element
    nextProduct = arr.slice(i + 1, arr.length).reduce((a, b) => a * b);
    // multiply the product of the numbers after the element by the product of the previous number
    products.push(nextProduct * prevProduct);
    // multiply the current number by the product of the previous numbers to update prevProduct
    prevProduct *= arr[i];
  };
  products.push(prevProduct);
  console.log(products);
  return products;
};

let test1 = [1, 2, 3, 4, 5];
getProductsOfAllIntsExceptAtIndex(test1);

let test2 = [0, 2, 3, 4, 5];
getProductsOfAllIntsExceptAtIndex(test2);