/**
 * TODO: https://leetcode.com/problems/find-words-containing-character/
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let result = []

    for (let i = 0; i < words.length; i++) {
        if(words[i].indexOf(x) !== -1) {
            result.push(i)
        }
    }
    return result
};

/**
 * * Language agnostic solution
 * * O(m*n) time complexity, where m is the number of words and n is the average length of the words
 * * O(1) space complexity, we can ignore the output array as it is not counted in space complexity, we not using it in our logic the lago suggests to return array.
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let result = []

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if(words[i][j] === x) {
                result.push(i)
                break
            }
        }
    }
    return result
};