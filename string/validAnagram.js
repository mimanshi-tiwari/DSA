/**
 * TODO: https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * O(n) time complexity
 * O(1), as hash length can be of max 26 characters as a string contins only alphabet
 */
var isAnagram = function (s, t) {
    const hash = new Map()

    for (let i = 0; i < s.length; i++) {
        if (hash.has(s[i])) {
            hash.set(s[i], hash.get(s[i]) + 1)
        } else {
            hash.set(s[i], 1)
        }
    }
    let freq = 0
    for (let k = 0; k < t.length; k++) {
        if (hash.has(t[k])) {
            freq = hash.get(t[k])
            freq === 1 ? hash.delete(t[k]) : hash.set(t[k], freq - 1)
        } else {
            return false
        }
    }

    return hash.size === 0
};