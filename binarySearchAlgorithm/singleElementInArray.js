/**
 * TODO: https://leetcode.com/problems/single-element-in-a-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let l = 0
    let r = nums.length - 1
    let m = Math.floor((l + r) / 2)

    while (l < r - 1) {
        m = Math.floor((l + r) / 2)
        if (r - l === 2) {//sample of length 3
            if (nums[m] === nums[r]) return nums[l]
            else if (nums[m] === nums[l]) return nums[r]
            return nums[m]
        }
        if (nums[m] !== nums[m + 1] && nums[m] !== nums[m - 1]) return nums[m]

        if (!(m % 2)) {// even
            if (nums[m] === nums[m + 1]) {
                l = m
            } else {
                r = m
            }
        } else {
            if (nums[m] === nums[m + 1]) {
                r = m -1
            } else {
                l = m + 1
            }
        }
    }
    return nums[m]
};

/**
 * * Better solution with less extra checks and more readable
 * * O(log n) time complexity, where n is the length of nums
 * * O(1) space complexity, we are not using any extra space for algo,
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let l = 0
    let r = nums.length - 1
    let m = Math.floor((l + r) / 2)

    while (l <= r) {
        m = Math.floor((l + r) / 2)
        if (nums[m] !== nums[m + 1] && nums[m] !== nums[m - 1]) return nums[m]

        if (!(m % 2)) {// even
            if (nums[m] === nums[m + 1]) {
                l = m + 2
            } else {
                r = m - 2
            }
        } else {
            if (nums[m] === nums[m + 1]) {
                r = m - 1
            } else {
                l = m + 1
            }
        }
    }
    return nums[m]
};