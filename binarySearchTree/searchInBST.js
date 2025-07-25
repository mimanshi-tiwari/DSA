/**
 * TODO: https://leetcode.com/problems/search-in-a-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    let valNode = null
    function findNode(root, val) {
        if (root.val === val) {
            valNode = root
        } else if (root.val > val) {
            root.left && findNode(root.left, val)
        } else {
            root.right && findNode(root.right, val)
        }
    }
    findNode(root, val)
    return valNode
};