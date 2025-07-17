/**
 * TODO: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * O(n^2) time complexity
 * O(1) space complexity, string containtains alphabets digits and symbols
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let hash = {}
    let test = ""
    let maxS = ""
    let j = 0

    for (let i = 0; i < s.length; i++) {
        j = i
        test = ""
        hash = {}
        while (!hash[s[j]] && s[j]) {
            test += s[j]
            hash[s[j]] = 1
            j++
        }

        if (maxS.length < test.length) {
            maxS = test
        }
    }
    return maxS.length
};

/**
 * O(n^2) time complexity
 * O(1) space complexity, string containtains alphabets digits and symbols
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0 || s.length === 1) return s.length
    let hash = {}
    let maxS = 0
    let j = 0
    let i = 0
    while (j < s.length) {
        if (hash[s[j]] === undefined) {
            hash[s[j]] = j
            j++
        } else {
            if ((j - i) > maxS) {
                maxS = j - i
            }
            while (i < hash[s[j]] + 1) {
                delete hash[s[i]]
                i++
            }
        }
    }
    if ((j - i) > maxS) {
        maxS = j - i
    }
    return i === 0 ? s.length : maxS
};

/**
 * O(n) time complexity
 * O(1) space complexity, string containtains alphabets digits and symbols
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0 || s.length === 1) return s.length
    let hash = {}
    let maxS = 0
    let j = 0
    let i = 0
    while (j < s.length) {
        if (hash[s[j]] !== undefined) {
            if ((j - i) > maxS) {
                maxS = j - i
            }
            if (hash[s[j]] >= i) {
                i = hash[s[j]] + 1
            }
        }
        hash[s[j]] = j
        j++
    }
    if ((j - i) > maxS) {
        maxS = j - i
    }
    return i === 0 ? s.length : maxS
};