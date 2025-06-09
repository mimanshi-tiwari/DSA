/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let x = 0
    for(let i =0;i< nums.length; i++) {
        if(nums[i] !== 0) {
            nums[x] = nums[i]
            x++
        }
    }

    while(x<nums.length) {
        nums[x] = 0
        x++
    }
};
// Example usage:
const nums = [0, 1, 0, 3, 12];  
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]