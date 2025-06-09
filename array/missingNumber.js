/**
 * TODO ; https://leetcode.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length
    const expSum = (n*(n+1))/2
    let actSum = 0

    for(let i=0 ; i<n ; i++ ) {
        actSum += nums[i]
    }
    return expSum - actSum
};

// Example usage:
const nums = [3, 0, 1];
const result = missingNumber(nums);
console.log(result); // Output: 2 (The missing number is 2)