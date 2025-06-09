/**
 * TODO: https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const hash = {}

    for(let i=0; i<nums.length; i++) {
        if(hash[nums[i]]) {
            hash[nums[i]] = 2
        } else {
            hash[nums[i]] = 1
        }
    }

    for(let i=0; i< nums.length ; i++) {
        if (hash[nums[i]] === 1) {
            return nums[i]
        }
    }
};

// Example usage:
const nums = [4, 1, 2, 1, 2];
const result = singleNumber(nums);
console.log(result); // Output: 4 (The single number is 4)


/**
 * ? Better solution for the same problem
 * @param {number[]} nums
 * @return {number}
 * This solution uses bit manipulation (XOR) to find the single number.
 * The XOR operation has the property that a ^ a = 0 and a ^ 0 = a.
 */
var singleNumber2 = function (nums) {
    let xor = 0
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i]
    }
    return xor
};

// Example usage:
const nums2 = [4, 1, 2, 1, 2];  
const result2 = singleNumber2(nums2);
console.log(result2); // Output: 4 (The single number is 4)
