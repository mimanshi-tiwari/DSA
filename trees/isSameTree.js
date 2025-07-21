/**
 * TODO: https://leetcode.com/problems/same-tree/submissions/1704546967/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    function compare(p, q) {
        if (!p && !q) return true
        if (!p || !q) return false

        if (p.val !== q.val) return false

        let leftSubTree = compare(p.left, q.left)
        let rightSubTree = compare(p.right, q.right)
        return leftSubTree && rightSubTree

    }

    return compare(p, q)

};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) return true
    if (!p || !q) return false

    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)

};