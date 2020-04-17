// For each index in an array of integers, find the product of every integer except the integer at that index without using division
// Returns an array of the products

function getProductsOfAllIntsExceptAtIndex(arr) {
  // set a variable named prevProduct to store the product of the previous numbers
  var prevProduct = 1;
  // set a variable named nextProduct to store the product of the next numbers
  var nextProduct = 1;
  // set a variable to an empty array to store the products
  var products = [];
  // for each element in the array...
  for(let i = 0; i < arr.length - 1; i++) {
    // find the product of the numbers after the element
    nextProduct = arr.slice(i + 1, arr.length).reduce((a, b) => a * b);
    // multiply the product of the numbers after the element by the product of the previous number
    products.push(nextProduct * prevProduct);
    // multiply the current number by the product of the previous numbers to update prevProduct
    prevProduct *= arr[i];
  };
  products.push(prevProduct);
  return products;
};

let test1 = [1, 2, 3, 4, 5];
console.log(getProductsOfAllIntsExceptAtIndex(test1));
