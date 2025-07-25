/**
 * TODO: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
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
var goodNodes = function (root) {
    let count = 0

    function traverse(curr, val) {
        if (!curr) return
        let v = val
        if(curr.val >= val) {
            v = curr.val
            count++
        } 


        traverse(curr.left, v)
        traverse(curr.right, v)
    }

    traverse(root, root.val)

    return count
};