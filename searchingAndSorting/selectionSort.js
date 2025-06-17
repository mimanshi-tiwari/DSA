/**
 * @param {number[]} nums
 * @return {number[]}
 * O(n^2) time complexity
 * O(1) space complexity
 */
var selectionSort = function (nums) {
    let swap = 0
    let n = nums.length
    let min = 0

    for (let i = 0; i < n - 1; i++) {
        min = i
        for (j = i + 1; j < n; j++) {
            if(nums[j] < nums[min]) min = j
        }

        if (i !== min) {
            swap = nums[min]
            nums[min] = nums[i]
            nums[i] = swap
        }
    }
    return nums
};