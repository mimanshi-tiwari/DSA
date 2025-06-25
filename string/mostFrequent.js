/**
 * TODO: https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/
 * @param {string} s
 * @return {number}
 * O(n) time complexity, where n is the length of the string s
 * O(1) space complexity, we can ignore the output variable as it is not counted in space complexity, we not using it in our logic the lago suggests to return number.
 */
var maxFreqSum = function (s) {
    const vMap = new Map()
    const cMap = new Map()
    let vMax = 0
    let cMax = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    // Frequency map for vowels and consonents
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) !== -1) {
            if (vMap.has(s[i])) {
                vMap.set(s[i], vMap.get(s[i]) + 1)
            } else {
                vMap.set(s[i], 1)
            }
        } else {
            if (cMap.has(s[i])) {
                cMap.set(s[i], cMap.get(s[i]) + 1)
            } else {
                cMap.set(s[i], 1)
            }
        }
    }

    // get max of vMap and cMap
    for (const [key, value] of vMap) {
        if (value > vMax) vMax = value
    }

    for (const [key, value] of cMap) {
        if (value > cMax) cMax = value
    }

    return vMax + cMax

};