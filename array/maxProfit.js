// TODO https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

var maxProfit = function (prices) {
    let min = Infinity
    let maxDiff = 0

    for (let i = 0; i < prices.length; i++) {
        if(prices[i] < min) {
            min = prices[i]
        } else if((prices[i]-min) > maxDiff) {
            maxDiff = prices[i] - min
        }
    }
    return maxDiff
};

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
const result = maxProfit(prices);
console.log(result); // Output: 5 (Buy at 1 and sell at 6)