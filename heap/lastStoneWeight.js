/**
 * TODO: https://leetcode.com/problems/last-stone-weight/
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let maxPQ = new MaxPriorityQueue()
    for (let i = 0; i < stones.length; i++) { // O(n)
        maxPQ.enqueue(stones[i])
    }

    while(maxPQ.size() > 1) { // O(n)
        let s1 = maxPQ.dequeue() // O(logk)
        let s2 = maxPQ.dequeue()

        if(s1 !== s2) {
            maxPQ.enqueue(Math.abs(s1-s2))
        }
    }

    return maxPQ.front() || 0
};