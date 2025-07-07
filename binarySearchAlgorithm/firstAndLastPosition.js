/**
 * TODO: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 * O(log n) time complexity, where n is the length of nums
 * O(1) space complexity, we are not using any extra space for algo,
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    let m = Math.floor((r + l) / 2)
    const ans = [-1, -1]

    while (l <= r) {
        if (nums[l] === target) {
            ans[0] = l
            break
        }
        m = Math.floor((r + l) / 2)
        if (nums[m] === target && nums[m] > nums[m - 1]) ans[0] = m
        if (nums[m] >= target) {
            r = m - 1
        } else if (nums[m] < target) {
            l = m + 1
        }
    }

    l = 0
    r = nums.length - 1
    while (l <= r) {
        if (nums[r] === target) {
            ans[1] = r
            break
        }
        m = Math.floor((r + l) / 2)

        if (nums[m] === target && nums[m] < nums[m + 1]) ans[1] = m

        if (nums[m] <= target) {
            l = m + 1
        } else if (nums[m] > target) {
            r = m - 1
        }
    }
    return ans
};

/**
 * * Same soution wth greedy approach
 * * O(log n) time complexity, where n is the length of nums
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    let m = Math.floor((l + r) / 2) // l + (r-l/2)
    let ans = [-1, -1]

    while (l <= r) {
        m = Math.floor((l + r) / 2)
        if (nums[m] === target) {
            ans[0] = m
            r = m - 1
        } else if (nums[m] < target) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
    l = 0
    r = nums.length - 1

    while (l <= r) {
        m = Math.floor((l + r) / 2)
        if (nums[m] === target) {
            ans[1] = m
            l = m + 1
        } else if (nums[m] > target) {
            r = m - 1
        } else {
            l = m + 1
        }
    }

    return ans

};