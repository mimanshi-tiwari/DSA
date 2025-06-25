/**
 * TODO: https://leetcode.com/problems/reverse-string-ii/
 * ! IMPORTANT: This is a tricky problem, read the question carefully
 * ! The string is reversed in chunks of k, not the whole string
 * @param {string} s
 * @param {number} k
 * @return {string}
 * * O(n) time complexity, where n is the length of the string
 * * O(1)/O(n) space complexity, we can ignore the output variable as it is not
 * * O(n) if we are converting into array else O(1)
 */
var reverseStr = function (s, k) {
    s = s.split('')
    let temp = ''
    for (let i = 0; i < s.length; i = i+2*k) {
        for (let j = 0; j < Math.floor(k / 2); j++) {
            temp = s[i+j]
            s[i+j] = s[i+k-j-1]
            s[i+k-j-1] = temp
        }

    }

    return s.join('')

};