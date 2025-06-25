/**
 * TODO: https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 * * sort solution
 * * O(n* mlog m) time complexity, n = length of the string array, m = max length of string in the array
 * * O(n) space complexity, where n is the length of the string array
 */
var groupAnagrams = function (a) {
    const hash = {}
    const ans = []
    const aCopy = [...a]
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i].split('').sort().join('')

        if (hash[a[i]] === undefined) {
            hash[a[i]] = ans.length
            ans.push([aCopy[i]])
        } else {
            ans[hash[a[i]]].push(aCopy[i])
        }
    }
    return ans
};


/**
 * * without aCopy
 * @param {string[]} strs
 * @return {string[][]}
 * * hash = {
 *  'aet': ['eat', 'tea', 'ate'],
 *  'ant': ['tan', 'nat']
 *  'abt': ['bat']
 *  }
 *  * * O(n* mlog m) time complexity, n = length of the string array, m = max length of string in the array
 * * O(n*m) space complexity, where n is the length of the string array
 */
var groupAnagrams = function (a) {
    const hash = {}
    const ans = []
    let sorted = ''
    for (let i = 0; i < a.length; i++) {
        sorted = a[i].split('').sort().join('')

        if (!hash[sorted]) {
            hash[sorted] = [a[i]]
        } else {
            hash[sorted].push(a[i])
        }
    }
    for (let key in hash) {
        ans.push(hash[key])
    }
    return ans
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 * hash = { sorted value to index in ans array
 *  'aet': 0,
 *  'ant': 1,
 *  'abt': 2}
 *  * * O(n* mlog m) time complexity, n = length of the string array, m = max length of string in the array
 * * O(n) space complexity, where n is the length of the string array
 */
var groupAnagrams = function (a) {
    const hash = {}
    const ans = []
    let sorted = ''
    for (let i = 0; i < a.length; i++) {
       sorted = a[i].split('').sort().join('')

        if (hash[sorted] === undefined) {
            hash[sorted] = ans.length
            ans.push([a[i]])
        } else {
            ans[hash[sorted]].push(a[i])
        }
    }
    return ans
};