/**
 * TODO: https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */

let store = {
    1: 1,
    2: 2,
}
var climbStairs = function (n) {
    if (store[n] !== undefined) {
 
        return store[n]
    }
    store[n] = climbStairs(n - 1) + climbStairs(n - 2)
    return store[n]
};



/**
 * * Bottom Up approach also called tabulation, it uses iterative approach
 * @param {number} n
 * @return {number}
 */

let dp = [0, 1, 2]
var climbStairs = function (n) {
    if (dp[n] !== undefined) {
        return dp[n]
    }
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n]
};