// Given an array of integers, find the highest product you can get from three of the integers

// input: array of integers, always with at least 3 integers
// output: highest product using any 3 of the integers
// edge cases: an array where some or all numbers are negative

// the product of 3 negative numbers will be negative
// the product of 2 negative numbers and 1 positive number will be positive
// the product of 1 negative number and 2 positive numbers will be negative

function highestProductOfThree(arr) {
	// sort the array of integers from least to greatest
	arr.sort((a, b) => a - b);
	// greatest int is located at the last index
	let lastInt = arr.length - 1;
	// if the product of the least 2 integers (possibly negative) is greater than the product of the greatest two integers
	if(arr[0] * arr[1] > arr[lastInt] * arr[lastInt - 1]) {
		// return the product of the least two negative integers and the greatest integer
		return arr[0] * arr[1] * arr[lastInt];
	};
	// else, return product of the greatest 3 integers
	return arr[lastInt] * arr[lastInt - 1] * arr[lastInt - 2];
};

var testArr = [5, -7, 3, -1, -4];  // expected output: -7 * - 4 * 5 = 140

var result = highestProductOfThree(testArr);

console.log(result === 140);
