/**
 * TODO: https://leetcode.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2
    if (!list2) return list1
    let sorted = new ListNode()
    sorted.next = list1
    let x = sorted
    let a = list1
    let b = list2

    while (a && b) {
        if (a.val === b.val) {
            x.next = b
            b = b.next
            x = x.next
            x.next = a
            a = a.next
            x = x.next
        } else if (a.val < b.val) {
            x.next = a
            a = a.next
            x = x.next
        } else {
            x.next = b
            b = b.next
            x = x.next
        }
    }

    if (a) x.next = a
    if (b) x.next = b
    return sorted.next
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * * Simplified above solution
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (a, b) {
    let sorted = new ListNode()
    let x = sorted

    while (a && b) {
        if (a.val < b.val) {
            x.next = a
            a = a.next
        } else {
            x.next = b
            b = b.next
        }
        x = x.next
    }

    if (a) x.next = a
    if (b) x.next = b
    return sorted.next
};