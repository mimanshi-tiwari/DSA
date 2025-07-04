/**
 * TODO: https://leetcode.com/problems/next-greater-element-ii/
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let arr = [...nums, ...nums]
    const stack = []
    const answer = []

    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length) {
            if (arr[i] < stack[stack.length - 1]) {
                answer[i] = stack[stack.length - 1]
                break;
            } else {
                stack.pop()
            }
        }

        if (answer[i] === undefined) answer[i] = -1
        stack.push(arr[i])
    }

    return answer.slice(0, nums.length)
};


//* Same solution without extra arr of 2n length

/**
 * @param {number[]} nums
 * @return {number[]}
 * O(n) time complexity, where n is the length of nums
 * O(n) space complexity, where n is the length of nums
 */
var nextGreaterElements = function (arr) {
    const stack = []
    const answer = []
    let idx = 0
    for (let i = (2 * arr.length) - 1; i >= 0; i--) {
        if (i >= arr.length) idx = i % arr.length
        else idx = i
        while (stack.length) {
            if (arr[idx] < stack[stack.length - 1]) {
                answer[i] = stack[stack.length - 1]
                break;
            } else {
                stack.pop()
            }
        }

        if (answer[i] === undefined) answer[i] = -1
        stack.push(arr[idx])
    }
    return answer.slice(0, arr.length)
};