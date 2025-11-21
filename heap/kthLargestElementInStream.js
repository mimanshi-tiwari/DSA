/**
 * TODO: https://leetcode.com/problems/kth-largest-element-in-a-stream/submissions/1826730437/
 * @param {number} k
 * @param {number[]} nums
 * * Using Priority Queue (Min Heap)
 * O(log k)
 * Space: O(k)
 */
var KthLargest = function(k, nums) {
    this.heap = new MinPriorityQueue()
    this.k = k
    for(let i=0; i< nums.length; i++) {
        this.add(nums[i])
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.enqueue(val)

    if(this.heap.size() > k) {
        this.heap.dequeue()
    }

   return this.heap.front()
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */