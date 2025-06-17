// TODO: https://leetcode.com/problems/linked-list-cycle/submissions/1664196921/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let hash = new Map()
    let isCyclic = false
    let pointer = head

    while (!isCyclic && pointer) {
        if (hash.has(pointer.next)) isCyclic = true
        else
            hash.set(pointer.next)

        pointer = pointer.next
    }

    return isCyclic
};

// Another approach using Floyd's Cycle Detection Algorithm

/**
 * * Foyd's Cycle Detection Algorithm
 * * Uses two pointers, one moving at twice the speed of the other.
 * * If they meet, there is a cycle.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if(!head) return false
 let p1 = head
 let p2 = head
   while(p2.next && p2.next.next) {
    p1 = p1.next
    p2 = p2.next.next
    if(p1 === p2) return true
   }
   return false
};