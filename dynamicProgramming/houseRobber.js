/**
 * TODO: https://leetcode.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])
    let maxCost = [nums[0], Math.max(nums[0], nums[1])]

    for (let i = 2; i <= nums.length; i++) {
        maxCost[i] = Math.max(maxCost[i - 2] + (nums[i] || 0), maxCost[i - 1])
    }

    return maxCost[nums.length]
};

/**
 * * Otimized solution, use p1 and p2 to store previous two values to achieve O(1) space complexity
 * * Time complexity: O(n) where n is the length of nums
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) return nums[0]
    let maxCost = [nums[0], Math.max(nums[0], nums[1])]

    for (let i = 2; i < nums.length; i++) {
        maxCost[i] = Math.max(maxCost[i - 2] + nums[i], maxCost[i - 1])
    }

    return maxCost[nums.length-1]
};