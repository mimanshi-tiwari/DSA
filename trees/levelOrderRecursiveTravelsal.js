/**
 * TODO: https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let level = 0
    let ans  = []
    function traverse(curr, level) {
        if(!curr) return
        if(ans[level]) {
            ans[level].push(curr.val)
        } else {
            ans[level] = [curr.val]
        }
        level = level + 1
        traverse(curr.left, level)
        traverse(curr.right, level)
    }
    traverse(root, level)
  return ans  
};