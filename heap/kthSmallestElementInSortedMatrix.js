/**
 * TODO: https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
 * Time Complexity: O(n^2 log k)
 * Space Complexity: O(k)
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let maxPQ = new MaxPriorityQueue()

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            maxPQ.enqueue(matrix[i][j])

            if (maxPQ.size() > k) {
                maxPQ.dequeue()
            }
        }
    }

    return maxPQ.front()

};