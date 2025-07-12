/**
 * TODO: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 * * O(n * m) time complexity, where n is the length of haystack and m is the length of needle
 * * O(1) space complexity, we are not using any extra space for algo,
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) return i
    }

    return -1

};

/**
 * ! IMPORTANT
 * * SLIDING WINDOW APPROACH
 * * O(n * m) time complexity, where n is the length of haystack and
 * * O(1) space complexity, we are not using any extra space for algo,
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if(needle === haystack) return 0
    let n = haystack.length
    let w = needle.length
    let test = ''
    for (let i = 0; i <= n - w; i++) {
        let count = 0
        while(count < w) {
            test += haystack[i+count]
            count++
        }
        if (test === needle) return i
        test = ''
    }
    return -1
};

//! Check knut morris pratt algorithm for better solution