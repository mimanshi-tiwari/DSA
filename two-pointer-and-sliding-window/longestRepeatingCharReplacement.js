/**
 * TODO: https://leetcode.com/problems/longest-repeating-character-replacement/
* !IMPORTANT
    * O(n) time complexity
    * O(1) space complexity, hash only contains 26 characters
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (a, k) {
    let validWindow = true
    let i = 0
    let j = 0
    let hash = { [a[0]]: 1 }
    let totalCount = 1
    let maxCount = 1
    let ans = 1

    while (j < a.length) {
        validWindow = totalCount - maxCount <= k
        if (validWindow) {
            ans = Math.max(j - i + 1, ans)
            j++
            if (hash[a[j]]) {
                hash[a[j]]++
            } else {
                hash[a[j]] = 1
            }
            maxCount = Math.max(maxCount, hash[a[j]])
            totalCount++
        } else {
            hash[a[i]]--
            i++
            totalCount--
        }
    }

    return ans
};