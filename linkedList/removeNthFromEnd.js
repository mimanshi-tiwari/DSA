/**
 * TODO: https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode()
    sentinel.next = head
    let pointer = sentinel 
    let l = 0
    let c = 1
    while(pointer) {
        pointer = pointer.next
        l++
    }
 
    pointer = sentinel
    while(c<=(l-n) && pointer && pointer.next) {
        if(c === (l-n)) {
            pointer.next = pointer.next.next
        } else {
            pointer = pointer.next
        }
        c++
    }
    return sentinel.next
};



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * * 1 pass, 2 pointer algorithm
 * * Better solution
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode()
    sentinel.next = head
    let fast= sentinel
    let slow = sentinel
    let count = 0

    while(count < n) {
        fast = fast.next
        count++
    }

    while(fast.next) {
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next
    return sentinel.next
};
