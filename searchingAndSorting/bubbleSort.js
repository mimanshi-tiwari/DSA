/**
 * @param {number[]} nums
 * @return {number[]}
 */
var bubbleSort = function (nums) {
    let swap = 0
    let n = nums.length
    let isSwapped = false // improvement
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < (n - 1 - i); j++) {
            isSwapped = false
            if (nums[j] > nums[j + 1]) {
                isSwapped = true // improvement
                swap = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = swap
            }
            if(!isSwapped) break; // improvement
        }
    }
    return nums
};