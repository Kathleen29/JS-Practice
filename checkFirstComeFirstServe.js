// The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
// The dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
// Each customer order (from either register) as it was finished by the kitchen. (servedOrders)
// Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

// We'll represent each customer order as a unique integer.

// As an example,

//  Take Out Orders: [1, 3, 5]
//  Dine In Orders: [2, 4, 6]
//  Served Orders: [1, 2, 4, 6, 5, 3]
// would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

// But,

//  Take Out Orders: [1, 3, 5]
//  Dine In Orders: [2, 4, 6]
//  Served Orders: [1, 2, 3, 5, 4, 6]
// would be first-come, first-served.

function checkFirstComeFirstServe(takeOut, dineIn, served) {
	// set a variable to store the current index of take out orders
	var currTakeOut = 0;
	// set a variable to store the current index of dine in order
	var currDineIn = 0;
	// for each served order
	for(let i = 0; i < served.length; i++) {
		// if current served order number is the current take out order
		if(takeOut[currTakeOut] === served[i]) {
			// increment the index of take out orders
			currTakeOut++;
		} else if(dineIn[currDineIn] === served[i]) {
		// else, if current served order number is the current dine in order
			// increment the index of dine in orders
			currDineIn++;
		} else {
			// else, return false
			return false;
		};
	};

	if(currTakeOut !== takeOut.length || currDineIn !== dineIn.length) {
		console.log(currTakeOut, takeOut.length);
		return false;
	};
	// return true if false has not been returned
	return true;
};

console.log(checkFirstComeFirstServe([1,3,5], [2,6], [1,2,3,5,6]));
console.log(checkFirstComeFirstServe([1,3,5], [2,4,6], [1, 2, 4, 6, 5, 3]));
console.log(checkFirstComeFirstServe([], [2,4,6], [1, 2, 4, 6, 5, 3]));




