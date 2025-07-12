
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * * Two pointer approach
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    let list1 = headA
    let list2 = headB
    let n = 0
    let m = 0

    while (list1) {
        n++
        list1 = list1.next
    }
    while (list2) {
        m++
        list2 = list2.next
    }
    let diff = Math.abs(m - n)
    let longerlist = m > n ? headB : headA
    let shorterList = m > n ? headA : headB
    while (diff) {
        diff--
        longerlist = longerlist.next
    }

    while (longerlist) {
        if (longerlist === shorterList) {
            return longerlist
        }
        longerlist = longerlist.next
        shorterList = shorterList.next
    }

    return null
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * * optimised version of abouve 2 pointer approach
 * O(n + m) time complexity and O(1) space complexity
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    let list1 = headA
    let list2 = headB

    while (list1 !== list2) {
        list1 = list1 === null ? headB : list1.next
        list2 = list2 === null ? headA : list2.next
    }
    return list1
};