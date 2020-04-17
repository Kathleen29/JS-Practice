// input: array of stock prices where the indices are the time past trade opening time, and the values are the price of one share of Apple stock at that time
// output: number representing the best profit that can be made from one purchase and one sale of one stock

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
