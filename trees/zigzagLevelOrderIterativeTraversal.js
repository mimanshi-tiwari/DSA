//TODO: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

/**
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
    if (!root) return []
    let q = [root]
    let ans = []
    let level = 0
    let isLtoR = true
    while (q.length) {
        let levelArr = []
        let qSize = q.length
        for (let i = 0; i < qSize; i++) {
            let curr = q.shift()
            isLtoR && levelArr.push(curr.val)
            !isLtoR && levelArr.unshift(curr.val)
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)
        }
        ans.push(levelArr)
        isLtoR = !isLtoR
    }

    return ans
};