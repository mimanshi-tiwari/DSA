/**
 * TODO: https://leetcode.com/problems/first-bad-version/
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 1
        let r = n
        let m = Math.floor((r + l) / 2)

        while (l <= r) {
            m = Math.floor((r + l) / 2)
            if (!isBadVersion(m - 1) && isBadVersion(m)) return m
            if (!isBadVersion(m)) {
                l = m + 1
            } else {
                r = m - 1
            }
        }
        return -1
    };
};

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * * Tweaked version of the above solution
 * * O(log n) time complexity, where n is the number of versions
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 1
        let r = n
        let m = Math.floor((r + l) / 2)

        while (l < r) {
            m = Math.floor((r + l) / 2)
            if (!isBadVersion(m)) {
                l = m + 1
            } else {
                r = m
            }
        }
        return r
    };
};