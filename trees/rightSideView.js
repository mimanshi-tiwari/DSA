/**
 * TODO: https://leetcode.com/problems/binary-tree-right-side-view/
 * * Recursive Solution
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
var rightSideView = function (root) {
    let ans = []
    let level = 0
    function leverOrder(curr, level) {
        if (!curr) return

        if (ans[level] === undefined) {
            ans[level] = curr.val
        }

        level = level + 1
        leverOrder(curr.right, level)
        leverOrder(curr.left, level)
    }

    leverOrder(root, level)

    return ans

};

/**
 * * Iterative Solution
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
var rightSideView = function (root) {
    if (!root) return []
    let ans = []
    let level = 0
    let q = [root]
    while (q.length) {
        let levelSize = q.length
        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift()
            if (ans[level] === undefined) {
                ans[level] = curr.val
            }
            curr.right && q.push(curr.right)
            curr.left && q.push(curr.left)
        }
        level++
    }
    return ans

};