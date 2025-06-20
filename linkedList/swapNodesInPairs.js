/**
 * TODO: https://leetcode.com/problems/swap-nodes-in-pairs/
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
var swapPairs = function (head) {
    if (!head) return head
    const sentinel = new ListNode()
    sentinel.next = head
    let pointer = sentinel
    let a, b

    while (pointer.next && pointer.next.next) {
        a = pointer.next
        b = pointer.next.next

        a.next = a.next.next
        b.next = a
        pointer.next = b

        pointer = pointer.next.next
    }
    return sentinel.next
}; 

/**
 * * Recursive solution
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
var swapPairs = function (head) {
    if (!head || !head.next) return head
    let l = head
    let r = head.next

    l.next = swapPairs(r.next)
    r.next = l
    return r
}; 