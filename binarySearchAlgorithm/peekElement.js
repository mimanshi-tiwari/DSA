/**
 * TODO: https://leetcode.com/problems/find-peak-element/
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if(nums.length === 1) return 0
    let l = 0
    let r = nums.length - 1
    let m = Math.floor((l + r) / 2)

    while (l <= r) {
        m = Math.floor((l + r) / 2)
        if ((m === 0 && nums[m] > nums[m + 1]) || (m === nums.length - 1 && nums[m] > nums[m - 1])) return m

        if (nums[m] > nums[m + 1] && nums[m] > nums[m - 1]) return m

        if (nums[m] < nums[m + 1]) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
    return -1
};


/**
 * * Simplified solution
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let l = 0
    let r = nums.length - 1
    let m = Math.floor((l + r) / 2)

    while (l < r) {
        m = Math.floor((l + r) / 2)
        if (nums[m] < nums[m + 1]) {
            l = m + 1
        } else {
            r = m
        }
    }
    return r
};