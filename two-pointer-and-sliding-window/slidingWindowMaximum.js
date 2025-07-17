/**
 * TODO: https://leetcode.com/problems/sliding-window-maximum/
 * * For worst case, time complexity is O(n*k) where n is the length of nums and k is the size of the sliding window
 * * Brute Force for worst case
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let ans = []
    let { max, idx } = findMax(0, k-1, nums)
    ans.push(max)
    for (let j = 1; j <= nums.length - k; j++) {
        if (idx >= j) {
            if (nums[j + k - 1] > nums[idx]) {
                ans.push(nums[j + k - 1])
                idx = j + k - 1
            } else {
                ans.push(nums[idx])
            }
        } else {
            if (nums[j + k - 1] > nums[idx]) {
                ans.push(nums[j + k - 1])
                idx = j + k - 1
            } else {
                let newMax = findMax(j, j + k - 1, nums)
                ans.push(newMax.max)
                idx = newMax.idx
            }
        }
    }

    return ans
};

function findMax(i, len, arr) {
    let max = -Infinity
    let idx = -1
    for (; i <= len; i++) {
        if (arr[i] > max) {
            max = arr[i]
            idx = i
        }
    }
    return { max, idx }
}

/**
 * * Optimized solution using monotonic decreasing queue
 * O(n) time complexity
 * O(k) space complexity
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let ans = []
    // monotonic decreasing dequeue
    let q = []
    ans.push(findMax(0, k - 1, nums, q))
    if (q[0] === nums[0]) q.shift()
    for (let j = 1; j <= nums.length - k; j++) {
        while (nums[j + k - 1] > q[q.length - 1]) {
            q.pop()
        }
        q.push(nums[j + k - 1])
        ans.push(q[0])
        if (q[0] === nums[j]) q.shift()
    }

    return ans
};

function findMax(i, len, arr, q) {
    for (; i <= len; i++) {
        if (!q.length) q.push(arr[i])
        else {
            while (arr[i] > q[q.length - 1]) {
                q.pop()
            }
            q.push(arr[i])
        }
    }
    return q[0]
}