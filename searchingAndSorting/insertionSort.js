/**
 * Inertion Sort
 * Sorts an array using the insertion sort algorithm.
 * The algorithm builds a sorted array one element at a time by repeatedly taking the next element and inserting it into the correct position in the already sorted part of the array.
 * It works by iterating through the array, and for each element, it compares it with the elements in the sorted part of the array and shifts them as necessary to make space for the new element.
 * This implementation uses a while loop to find the correct position for the current element and shifts the elements accordingly.
 * @param {number[]} nums
 * @return {number[]}
 * O(n^2) time complexity
 * O(1) space complexity
 */
var sortArray = function (nums) {
    let current = 0
    let prev = 0
    let n = nums.length
    for (let i = 1; i < n; i++) {
        current = nums[i]
        prev = i - 1
        while(nums[prev] > current && prev >=0) {
            nums[prev+1] = nums[prev]
            prev--
        }
        nums[prev+1] = current
    }
    return nums
};