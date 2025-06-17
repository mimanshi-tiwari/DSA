/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * TODO: https://leetcode.com/problems/intersection-of-two-linked-lists/
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    let list1 = headA
    let list2 = headB
    let hash = new Map()

    while(list1) {
        hash.set(list1)
        list1 = list1.next
    }
    
    while(list2) {
        if(hash.has(list2))  {
            return list2
        }
        list2 = list2.next
    }
    return null
};