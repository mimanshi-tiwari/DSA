/**
 * TODO: https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    let m = 0

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            if (target >= nums[0] && target <= nums[i]) {
                l = 0
                r = i
            }
            if (target >= nums[i + 1] && target <= nums[nums.length - 1]) {
                l = i + 1
                r = nums.length - 1
            }
            break
        }
    }

    while (l <= r) {
        m = Math.floor((l + r) / 2)
        if (nums[m] === target) return m
        else if (nums[m] > target) {
            r = m - 1
        } else {
            l = m + 1
        }
    }


    return -1

};

/**
 * ! IMPORTANT
 * * Better solution
 * * O(log n) time complexity, where n is the length of nums
 * * O(1) space complexity, we are not using any extra space for algo,
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    let m = 0

    while (l <= r) {
        m = Math.floor((l + r) / 2)
        if (nums[m] === target) return m
        if (nums[m] >= nums[l]) { // left sorted
            if (target >= nums[l] && target < nums[m]) {
                r = m - 1
            } else {
                l = m + 1
            }

        } else { // right sorted
            if (target > nums[m] && target <= nums[r]) {
                l = m + 1
            } else {
                r = m - 1
            }

        }
    }

    return -1

};