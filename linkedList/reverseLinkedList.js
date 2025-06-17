// TODO: https://leetcode.com/problems/reverse-linked-list/submissions/1664189407/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null || head.next === null) return head
    let prev = null
    let pointer = head
    let next = pointer.next

    while(next) {
        pointer.next = prev
        prev = pointer
        pointer = next
        next = pointer.next
    }
    pointer.next = prev
    
    return pointer
    
};