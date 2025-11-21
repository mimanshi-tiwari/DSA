/**
 * TODO: https://leetcode.com/problems/top-k-frequent-elements/
 * Time Complexity: O(n log k)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            hash[nums[i]]++
        } else {
            hash[nums[i]] = 1
        }
    }

    let minPQ = new MinPriorityQueue(x => x.freq)

    for (let key in hash) {
        minPQ.enqueue({val: key, freq: hash[key]})
        if (minPQ.size() > k) {
            minPQ.dequeue()
        }
    }
 return minPQ.toArray().map(val => +val.val)
}


/**
 * time complexity: O(k log n)
 * space complexity: O(n)
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let minPQ = new MinPriorityQueue(x => x.val)
    let n = matrix[0].length
    for (let i = 0; i < matrix.length; i++) {
        minPQ.enqueue({ val: matrix[i][0], row: i, col: 0 })
    }

    for (let i = 0; i < k - 1; i++) {
        let { val, row, col } = minPQ.dequeue()

        if (col+1 < n) {
            minPQ.push({ val: matrix[row][col + 1], row: row, col: col + 1 })
        }
    }

    return minPQ.front().val

};