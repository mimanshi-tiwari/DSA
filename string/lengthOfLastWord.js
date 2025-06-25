/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const splitArr = s.trim().split(' ')
    return splitArr[splitArr.length - 1].length
};

/**
 * * Use loop to solve these questions
 * * This is a more efficient solution
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let count = 0
    for (i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ' && count) break
        if (s[i] !== ' ') {
            count++
        }
    }
    return count
};

/**
 * * Same solution using while loop 
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let count = 0
    let n = s.length - 1
    while (n) {
        if (s[n] === ' ' && count) break
        if (s[n] !== ' ')
            count++
        n--
    }
    return count
};

/**
 * * same solution different way of writing
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let count = 0
    let n = s.length - 1
    while (n) {
        if (s[n] !== ' ') {
            count++
        } else if (count) {
            break
        }

        n--
    }
    return count
};