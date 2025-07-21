/**
 * TODO: https://leetcode.com/problems/binary-tree-postorder-traversal/
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
var postorderTraversal = function(root) {
    const ans = []

    function traverse(root) {
        if(!root) return
        traverse(root.left)
        traverse(root.right)
        ans.push(root.val)
    }

    traverse(root)
    return ans
};