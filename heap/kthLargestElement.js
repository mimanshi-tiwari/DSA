/**
 * TODO: https://leetcode.com/problems/kth-largest-element-in-an-array/submissions/1826732754/
 * Priority Queue implementation using Min Heap
 * O(log k)
 * Space: O(k)
 */
 
var findKthLargest = function(nums, k) {
    let pq = new MinPriorityQueue()

    for(let i =0; i< nums.length; i++) {
        pq.enqueue(nums[i])
        if(pq.size() > k) {
            pq.dequeue()
        }
    }

    return pq.front()
};