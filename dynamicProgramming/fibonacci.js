/**
 * TODO: https://leetcode.com/problems/fibonacci-number/
 * @param {number} n
 * @return {number}
 * Top Down approach also called memoization
 * O(n) time complexity, where n is the input number
 * O(n) space complexity, we are using extra space for store object
 * Space complexity explanation:
 * O(n) for the recursion stack, which can go up to size n in the worst case.
 */

// * For Navice recursion time complexity is O(2^n) and space complexity is O(n) for the recursion stack
 let store = {
    0: 0,
    1: 1,
 }
var fib = function(n) {
    if(store[n] !== undefined) {
        return store[n]
    }
    store[n] = fib(n-1) + fib(n-2)
    return  store[n]
    
};

// * Bottom Up approach also called tabulation, it uses iterative approach

/**
 * @param {number} n
 * @return {number}
 */

    let dp = [0, 1]
var fib = function (n) {
    if (dp[n] !== undefined) {
        return dp[n]
    }
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n]
};