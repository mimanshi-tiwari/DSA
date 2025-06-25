/**
 * TODO: https://leetcode.com/problems/split-a-string-in-balanced-strings/description/
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    const freq = { 'R': 0, 'L': 0, 'C': 0 }
    for (let i = 0; i < s.length; i++) {
        if(s[i] === 'R') {
            freq['R'] = freq['R'] + 1
        } else {
             freq['L'] = freq['L'] + 1
        }

        if(freq['R'] === freq['L']) {
            freq['C'] =  freq['C'] +1
            freq['R'] = 0
            freq['L'] = 0
        }
    }

    return freq['C']
};

/**
 * * Better solution
 * ? For balance +1 -1 can be used
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let temp = 0
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            temp += 1
        } else {
            temp -= 1
        }

        if(!temp) {
            count++
        }
    }

    return count
};