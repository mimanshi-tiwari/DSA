/**
 * TODO: https://leetcode.com/problems/permutation-in-string/
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let s1Map = new Map()
    for (let char of s1) {
        if (s1Map.has(char)) {
            s1Map.set(char, s1Map.get(char) + 1)
        } else {
            s1Map.set(char, 1)
        }
    }
    let cMap = new Map(structuredClone(s1Map))
    let j = 0
    for (let i = 0; i < s2.length; i++) {
        j = i
        cMap = new Map(structuredClone(s1Map))
        while (j - i + 1 <= s1.length) {
            if (cMap.has(s2[j])) {
                if (cMap.get(s2[j]) === 1) {
                    cMap.delete(s2[j])
                } else {
                    cMap.set(s2[j], cMap.get(s2[j]) - 1)
                }
            } else {
                break
            }
            if (cMap.size === 0) {
                return true
            }
            j++
        }
    }
    return cMap.size === 0

};


/**
 * * Much better solution using sliding window and hash map
 * * Time Complexity: O(n)
 * * Space Complexity: O(1) - since we are using a fixed size array of 26 characters
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if(s1.length > s2.length) return false
    const maps1 = new Array(26).fill(0)
    const maps2 = new Array(26).fill(0)
    // Create map of s1
    for (let i = 0; i < s1.length; i++) {
        maps1[s1[i].charCodeAt() - 97]++
    }
    // create nitial window map of s2 of size s1.length
    for (let i = 0; i < s1.length; i++) {
        maps2[s2[i].charCodeAt() - 97]++
    }
    // compare initial window and return if true
    if (compareHash(maps2, maps1)) return true

    // modifify maps2 as per new window (j=1 --> (s2.length - s1.length))
    for (let j = 1; j <= s2.length - s1.length; j++) {
        maps2[s2[j - 1].charCodeAt() - 97]--
        maps2[s2[j + s1.length - 1].charCodeAt() - 97]++
        if (compareHash(maps2, maps1)) return true
    }
    return false
};

function compareHash(h1, h2) {
    for (let i = 0; i < 26; i++) {
        if (h1[i] !== h2[i]) return false
    }

    return true
}