/**
 * TODO: https://leetcode.com/problems/fibonacci-number/
 * @param {number} n
 * @return {number}
 * ? n*2^n = O(2^n) time complexity, exponential vry poor
 * ?  we can use dynamic programmin to reduce the time complexity
 */
var fib = function(n) {
    if(n === 0) return 0
    if(n === 1) return 1
    return fib(n-1) + fib(n-2)
};

// Example usage:
const n = 5;
const result = fib(n);
console.log(result); // Output: 5 (The 5th Fibonacci number is 5)