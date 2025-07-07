/**
 * TODO: https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * O(log n) time complexity, where n is the length of arr
 * O(1) space complexity, we are not
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let l = 0
    let r = arr.length - 1
    let m = Math.floor((l + r) / 2) // l+ Math.floor((r-l)/2)

    while (l < r) {
        m = Math.floor((l + r) / 2)
        if (arr[m] > arr[m + 1]) {
            r = m
        } else {
            l = m + 1
        }
    }
    return r
};