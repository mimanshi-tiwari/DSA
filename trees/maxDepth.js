/**
 * TODO: https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * * TOP BOTTOM APPROACH
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
var maxDepth = function (root) {
    if(!root) return 0
    let level = 0
    let q = [root]
    let maxDepth = 0

    function traverse(curr, level) {
        if (!curr) {
            maxDepth = Math.max(maxDepth, level)
            return
        }
        traverse(curr.left, level + 1)
        traverse(curr.right, level + 1)
    }
    traverse(root, level)
    return maxDepth
};

/**
 * * BOTTOM UP APPROACH
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
var maxDepth = function (root) {
    if (!root) return 0
    let leftMax = maxDepth(root.left)
    let rightMax = maxDepth(root.right)

    return 1 + Math.max(leftMax, rightMax)

};