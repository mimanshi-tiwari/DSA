/**
 * TODO: https://leetcode.com/problems/power-of-two/
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    const power = 0
    function Pow(power) {
        if (Math.pow(2, power) === n) return true
        if (Math.pow(2, power) > n) return false
        return Pow(power + 1)
    }

    return Pow(power)

};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 1) return true
    if (n < 1) return false
    return isPowerOfTwo(n / 2)
};

// Example usage:
const n = 16;  
const result = isPowerOfTwo(n);
console.log(result); // Output: true (16 is a power of 2, specifically 2^4)