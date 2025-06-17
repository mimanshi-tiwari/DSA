/**
 * TODO: https://leetcode.com/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * O(log n) time complexity
 * O(1) space complexity
 */
var search = function(nums, target) {
    let l = 0
    let r = nums.length -1
    let m = 0

    while (l<=r) {
        m = Math.floor((r+l)/2)
        if(nums[m] === target) return m
        if(nums[m] > target) r = m-1
        if(nums[m] < target) l = m+1
    }
    return -1
};