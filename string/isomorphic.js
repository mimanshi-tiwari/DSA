/**
 * TODO: https://leetcode.com/problems/isomorphic-strings/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length != t.length) return false
    const hash = {}
    let mapT = ''

    for (let i = 0; i < s.length; i++) {
        if (!hash[s[i]]) {
            // check if any key has value equal to t[i], if yes return false
            for(let key in hash) {
                if(hash[key] === t[i]) return false
            }
            hash[s[i]] = t[i]
        }
        mapT += hash[s[i]]
    }
    return mapT === t
}

/**
 * *aoter apporach without usin extra space
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length != t.length) return false
    const hash = {}

    for (let i = 0; i < s.length; i++) {
        if (!hash[s[i]]) {
            // check if any key has value equal to t[i], if yes return false
            for(let key in hash) {
                if(hash[key] === t[i]) return false
            }
            hash[s[i]] = t[i]
        } else if (hash[s[i]] && hash[s[i]] !== t[i]) {
            return false
        }
    }
    return true
}

/**
 * *as per given constrains string ca have ascii characters which are limited. SO hash and revHash will also hae limited values in worst case. Hence O(1) space complexity
 * * O(n) time complexity, where n is the length of the string s
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length != t.length) return false
    const hash = {}
    const revHash = {}

    for (let i = 0; i < s.length; i++) {
        if (!hash[s[i]]) {
            if(revHash[t[i]]) return false
            hash[s[i]] = t[i]
            revHash[t[i]] = s[i]
        } else if (hash[s[i]] !== t[i]) {
            return false
        }
    }
    return true
}