/**
 * TODO: https://leetcode.com/problems/symmetric-tree/
 * * RECURSIVE APPROACH, BOTTOM UP APPROACH
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {

    function isMirror(leftTree, rightTree) {
        if (!leftTree && !rightTree) return true
        if (!leftTree || !rightTree) return false

        return leftTree.val === rightTree.val &&
            isMirror(leftTree.left, rightTree.right) &&
            isMirror(leftTree.right, rightTree.left)
    }
    return isMirror(root.left, root.right)
};

/**
 * * Iterative Approach, Using Queue
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let q = [root.left, root.right]

    while (q.length) {
        let c1 = q.shift()
        let c2 = q.shift()
        if (!c1 && !c2) continue
        if (!c1 || !c2) return false
        if (c1.val !== c2.val) return false
        q.push(c1.left)
        q.push(c2.right)
        q.push(c1.right)
        q.push(c2.left)
    }
    return true
};