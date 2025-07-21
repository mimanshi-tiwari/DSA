/**
 * TODO: https://leetcode.com/problems/balanced-binary-tree/
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
var isBalanced = function (root) {
    let ans = true


    function findHeight(curr) {
        if (!curr) return 0
        let leftH = findHeight(curr.left)
        let rightH = findHeight(curr.right)

        if (Math.abs(leftH - rightH) > 1) {
            ans = ans && false
        }
        return 1 + Math.max(leftH, rightH)
    }

    findHeight(root)

    return ans

};