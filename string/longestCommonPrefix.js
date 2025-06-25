/**
 * TODO: https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0]
    let prefix = strs[0]
    let p = ''
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].substring(0, prefix.length) !== prefix) {
            p = prefix
            for (let j = p.length - 1; j >= 0; j--) {
                if (strs[i].substring(0, j) === p.substring(0, j)) {
                    prefix = p.substring(0, j)
                    break
                }

                if (j === 0 && prefix === strs[0]) return ''
            }
        }
    }

    return prefix
};

/**
 * * Better solution
 * ! IMORTANT
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (s) {
    if (s.length === 1) return s[0]
    let prefix = ''
    let p = ''
    for (let x = 0; x < s[0].length; x++) {
        p = s[0][x]
        for (let i = 0; i < s.length; i++) {
            if (s[i][x] !== p || !s[i][x]) {
                return prefix
            }
        }
        prefix += s[0][x]
    }
    return prefix
};