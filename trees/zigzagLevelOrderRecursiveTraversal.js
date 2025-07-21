/**
 * TODO: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
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
var zigzagLevelOrder = function (root) {
    let ans = []
    let level = 0

    function traverse(curr, level) {
        if (!curr) return
        if (level % 2) {
            if (ans[level]) {
                ans[level].unshift(curr.val)
            } else {
                ans[level] = [curr.val]
            }
        } else {
            if (ans[level]) {
                ans[level].push(curr.val)
            } else {
                ans[level] = [curr.val]
            }
        }
        level = level + 1
        traverse(curr.left, level)
        traverse(curr.right, level)
    }
    traverse(root, level)

    return ans

};