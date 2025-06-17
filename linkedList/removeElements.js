/**
 * TODO: https://leetcode.com/problems/remove-linked-list-elements/description/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) return head
    let pointer = head
    // First traverse each node and check for next node val, if next node val is (val) chekc for multiple consequtive values and by pass them 
    while (pointer && pointer.next) {
        if (pointer.next.val === val) {
            let p1 = pointer
            while (p1.next && p1.next.val === val) {
                p1 = p1.next
            }
            pointer.next = p1.next
        } else
            pointer = pointer.next
    }
    // Chekc for first and only value in node, add this ater above check as above check doesnot acount for frst value
    if (pointer && pointer.next === null && pointer.val === val) {
        pointer = null
    }

    // Check if val is (val) rest val can be any thing
    if (head.val === val) {
        head = head.next
    }

    return head
};


/**
 * ? Sentinel code for reference
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let sentinel = new ListNode()
    sentinel.next = head
    let pointer = sentinel

    while(pointer && pointer.next) {
        if(pointer.next.val === val) {
            pointer.next = pointer.next.next // updating pointer next not pointer, so pointer remain at same node but next reference changes
        } else {
            pointer = pointer.next // moving pointer ahead
        }
    }

    return sentinel.next
};