/**
 * TODO: https://leetcode.com/problems/3sum/
 * O(n^2) time complexity
 * O(n) space complexity if we consider the output array as space used
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (arr) {
    arr.sort((a, b) => a - b)
    let ans = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            TwoSum(arr, i, ans)
        }
    }
    return ans
};

function TwoSum(arr, x, ans) {
    let i = x + 1
    let j = arr.length - 1

    while (i < j) {
        let sum = arr[i] + arr[j] + arr[x]
        if (sum > 0) {
            j--
        } else if (sum < 0) {
            i++
        } else {
            ans.push([arr[i], arr[j], arr[x]])
            i++
            j--
            while (i < j && arr[i] === arr[i-1]) i++
        }
    }
}