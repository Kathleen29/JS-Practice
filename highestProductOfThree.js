// Given an array of integers, find the highest product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.

// input: array of integers, always with at least 3 integers
// output: highest product using any 3 of the integers
// edge cases: an array where some or all numbers are negative

// the product of 3 negative numbers will be negative
// the product of 2 negative numbers and 1 positive number will be positive
// the product of 1 negative number and 2 positive numbers will be negative

// sorting the array - linear time
function highestProductOfThree(arr) {
	arr.sort((a, b) => a - b);
	let lastInt = arr.length - 1;
	if(arr[0] * arr[1] > arr[lastInt] * arr[lastInt - 1]) {
		return arr[0] * arr[1] * arr[lastInt];
	};
	return arr[lastInt] * arr[lastInt - 1] * arr[lastInt - 2];
};

var testArr = [5, -7, 3, -1, -4];  // expected output: 3 * 5 * -1 = -15
var testArr2 = [-10, -10, 1, 3, 2];
const arrayOfInts = [1, 10, -5, 1, -100];

var result = highestProductOfThree(testArr);
var result2 = highestProductOfThree(testArr2);
var result3 = highestProductOfThree(arrayOfInts);

console.log(result);
console.log(result2);
console.log(result3);