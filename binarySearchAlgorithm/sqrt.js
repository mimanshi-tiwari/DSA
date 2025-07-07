//! x < 2 return x
//! x >= 2 sqrt can never exceed x/2
//! In case of Binar search algorithm, If x is not a perfect square, RIGHT limit is the answer

/**
 * TODO: https://leetcode.com/problems/sqrtx/submissions/1686470572/
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x
    let l = 2
    let r = Math.floor(x / 2)


    let m = 0

    while (l <= r) {
        m = Math.floor((l + r) / 2)
        if (m * m === x) return m
        if (m * m > x) r = m - 1
        if (m * m < x) l = m + 1
    }
    return r
};