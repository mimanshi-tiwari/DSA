/**
 * TODO: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * 
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // KMP Algorithm

    // 1. Create LPS (longest prefix sufix) array of needle

    let m = haystack.length
    let n = needle.length

    let i = 0
    let j = 1
    let lps = [0] // lps of first character will always be 0

    while (j < n) {
        if (needle[i] === needle[j]) {
            lps[j] = i + 1
            ++i
            ++j
        } else {
            if (i === 0) {
                lps[j] = 0
                ++j
            } else {
                i = lps[i - 1]
            }
        }
    }
    // 2. Check the string for first occurance

    i = 0
    j = 0

    while (i < m) {
        if (haystack[i] === needle[j]) {
            ++i
            ++j
        } else {
            if (j === 0) {
                ++i
            } else {
                j = lps[j - 1]
            }
        }

        if (j === n) {
            return (i - n)
        }
    }

    return -1

};