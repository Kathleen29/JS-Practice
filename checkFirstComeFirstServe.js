// check if dine-in and takeout orders are first come first serve
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
