/**
 * TODO: https://leetcode.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let totalSum = new ListNode()
    let nodeSum = totalSum
    let carry = 0
    let s = 0
    while (l1 || l2) {
        const sum = new ListNode()
        nodeSum.next = sum
        s = (l1?.val || 0) + (l2?.val || 0) + carry
        sum.val = (s) % 10
        carry = Math.floor((s) / 10)
        sum.next = null
        nodeSum = nodeSum.next
        if (l1)
            l1 = l1.next
        if (l2)
            l2 = l2.next
    }
    if (carry) {
        const sum = new ListNode(carry)
        nodeSum.next = sum
    }
    return totalSum.next
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let totalSum = new ListNode()
    let nodeSum = totalSum
    let carry = 0
    let s = 0
    while (l1 || l2 || carry) {
        const newNode = new ListNode()
        nodeSum.next = newNode
        sum = (l1?.val || 0) + (l2?.val || 0) + carry
        newNode.val = (sum) % 10
        carry = Math.floor((sum) / 10)
        newNode.next = null
        nodeSum = nodeSum.next
        if (l1)
            l1 = l1.next
        if (l2)
            l2 = l2.next
    }
    return totalSum.next
};