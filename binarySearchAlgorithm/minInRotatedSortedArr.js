/**
 * TODO: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0
    let r = nums.length - 1
    let m = Math.floor((r + l) / 2)

    while (l < r) {
        m = Math.floor((r + l) / 2)
        if(nums[m] > nums[r]) {
            if(m === l) return nums[r]
            l = m
        } else {
            r = m
        }
    }

    return nums[r]
};