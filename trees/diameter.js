/**
 * TODO: https://leetcode.com/problems/diameter-of-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let max = 0

    function findLevel(curr) {
        if (!curr) return 0
        let left = findLevel(curr.left)
        let right = findLevel(curr.right)
        max = Math.max(max, left + right)

        return 1 + Math.max(left, right)
    }
    findLevel(root)
    return max
};