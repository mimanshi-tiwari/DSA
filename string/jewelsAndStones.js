/**
 * TODO: https://leetcode.com/problems/jewels-and-stones/
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * O(m*n) time complexity, where m is the length of jewels and n is the length of stones
 * O(1) space complexity, we can ignore the output variable as it is not counted in space complexity, we not using it in our logic the lago suggests to return number.
 */
var numJewelsInStones = function (jewels, stones) {
    let count = 0
    for (let i = 0; i < stones.length; i++) {
        for (j = 0; j < jewels.length; j++) {
            if (jewels[j] === stones[i]) count++
        }
    }
    return count

};

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * * O(m+n) time complexity, where m is the length of jewels and n is the length of stones
 * O(1) space complexity, freq will ave all unique elements and it is gien in problem it comtains only eng letters which in worst cqase will have 26+26 = 52 unique elements. Hence O(1) space complexity
 * * This is a better solution
 */
var numJewelsInStones = function (jewels, stones) {
    const freq = new Map()
    let count = 0
    // create freq map for stones
    for (let i = 0; i < stones.length; i++) {
        if (freq.has(stones[i])) {
            const f = freq.get(stones[i])
            freq.set(stones[i], f + 1)
        } else {
            freq.set(stones[i], 1)
        }
    }
    // add freq count if elemt is present n freq map
    for (let j = 0; j < jewels.length; j++) {
        if (freq.has(jewels[j])) {
            count += freq.get(jewels[j])
        }
    }
    return count
};