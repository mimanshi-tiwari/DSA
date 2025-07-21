/**
 * TODO: https://leetcode.com/problems/binary-tree-preorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if(!root) return []
    let stack = []
    stack.push(root)
    let current = null
    let ans = []

    while (stack.length) {
        current = stack.pop()
        ans.push(current.val)
        current.right && stack.push(current.right)
        current.left && stack.push(current.left)
    }

    return ans

};