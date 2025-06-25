/**
 * TODO: https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, '')
    let sCopy = s.split('')
    let temp = ''
    for (let i = 0; i < Math.floor(sCopy.length / 2); i++) {
        temp = sCopy[i]
        sCopy[i] = sCopy[sCopy.length - 1 - i]
        sCopy[sCopy.length - 1 - i] = temp
    }
    return s === sCopy.join('')

};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, '')
    let isPalindrome = true
    for (let i = 0; i < Math.floor(s.length / 2); i++) {

        if (s[i] !== s[s.length - 1 - i]) return false
    }
    return true
};