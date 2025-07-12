/**
 * TODO: https://leetcode.com/problems/is-subsequence/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (t.length < s.length) return false

    let p1 = 0
    let p2 = 0
    while (p2 < t.length && p1 < s.length) {
        if(t[p2] === s[p1]) {
            p1++
            p2++
        } else {
            p2++
        }
    }

    return p1 === s.length
};