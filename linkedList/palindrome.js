/**
 * TODO: https://leetcode.com/problems/palindrome-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let pointer = head

    function traverseList(node) {
        if (node === null) return true

        // Traverse to end of list, call stack will have all functions piled up.
        const prev = traverseList(node.next)

        // compare pointer val which starts from HEAD with NODE which strats from end in call stack
        const curr = pointer.val === node.val
        pointer = pointer.next

        // returns true is both are true
        return prev && curr
    }

    const palindrome = traverseList(head)
    return palindrome
};


/**
 * TODO: https://leetcode.com/problems/palindrome-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 *  BETTER APPROACH
 * * * Using Two Pointers and Reversing the Second Half of the List
 * * * This approach finds the middle of the linked list, reverses the second half, and then compares the two halves.
 * @param {ListNode} head
 * @return {boolean}
 * * * Time Complexity: O(n)
 * * * Space Complexity: O(1)
 */
var isPalindrome = function (head) {
    if(!head) return true
  let slow = head
  let fast = head
 // * Finding middle element
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // * Reverse second half of the list
  let prev = null
  let curr = slow
  let temp = slow

  while(curr) {
    temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }
 // * Check for Plaindrome
  let firstList = head
  let secList = prev

  while(secList) {
    if(firstList.val !== secList.val) return false

    firstList = firstList.next
    secList = secList.next
  }

  return true

};