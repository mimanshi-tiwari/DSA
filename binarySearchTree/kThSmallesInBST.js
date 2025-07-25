/**
 * TODO: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * * In order traversal of a BST gives the elements in sorted order.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
   let inOrder = []
   function traverse(curr) {
    if(!curr) return

    traverse(curr.left)
    inOrder.push(curr.val)
    traverse(curr.right)
   }
   traverse(root)
   return inOrder[k-1]
};