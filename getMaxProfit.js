// So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:

// The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
// The values are the price (in US dollars) of one share of Apple stock at that time.
// So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

// Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// For example:

//   const stockPrices = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPrices);
// // Returns 6 (buying for $5 and selling for $11)

// No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.

// input: array of stock prices where the indices are the time past trade opening time, and the values are the price of one share of Apple stock at that time
// output: number representing the best profit that can be made from one purchase and one sale of one Apple stock

function getMaxProfit(stockPrices) {
  // set a variable to store lowest buy price, setting it to the first element in the array
  let buyPrice = stockPrices[0];
  // set a variable to store highest sell price, setting it to the second element in the array
  let maxPrice = stockPrices[1] - stockPrices[0];
  let currPrice;
  // iterate through the array starting from the value at index 1
  for(let i = 0; i < stockPrices.length - 2; i++) {
    // if current element is less than buy price, update buyPrice
    if(stockPrices[i] < buyPrice) {
      buyPrice = stockPrices[i];
    };
    currPrice = stockPrices[i] - buyPrice;
    // if next element is higher than sell price, update sellPrice
    if(currPrice > maxPrice) {
      sellPrice = stockPrices[i+1];
    };
  };
  // return the difference between highest possible sell price and lowest possible buy price - the max profit
  return sellPrice - buyPrice;
};

const stockPrices = [10, 7, 5, 8, 11, 9];

console.log(getMaxProfit(stockPrices)); // 6

const negPrices = [5, -3, -7, -1, -8, -2];
console.log(getMaxProfit(negPrices)); // -1

