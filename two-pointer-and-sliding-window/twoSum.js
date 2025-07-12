/**
 * TODO: https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = {} //[target - nums[i]] : i
    let ans = [-1, -1]
    for (let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] !== undefined) {
            return [hash[nums[i]], i]
        }

        hash[target - nums[i]] = i
   
    }
    return ans
};