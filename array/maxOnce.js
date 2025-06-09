/**
 * TODO: https://leetcode.com/problems/max-consecutive-ones/
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let counter = 0
    let max1 = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            counter++
        } else {
            max1 = counter > max1 ? counter : max1
            counter = 0
        }
    }

    max1 = counter > max1 ? counter : max1

    return max1

};

// Example usage:
const nums = [1, 1, 0, 1, 1, 1];
const result = findMaxConsecutiveOnes(nums);
console.log(result); // Output: 3 (The longest sequence of 1's is 3)    