/**
 * TODO: https://leetcode.com/problems/binary-tree-postorder-traversal/
 * * Using 2 stacks
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
var postorderTraversal = function (root) {
    if(!root) return []
    let s1 = [root]
    let s2 = []
    let curr = null
    let ans = []

    while (s1.length) {
        curr = s1.pop()
        s2.push(curr)
        curr.left && s1.push(curr.left)
        curr.right && s1.push(curr.right)
    }

    while(s2.length) {
        ans.push(s2.pop().val)
    }
    return ans
};


// * Using 1 stack

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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let stack = []
    let ans = []
    let curr = root
    let peek = null
    let lastVisited = null

    while (curr || stack.length) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        peek = stack[stack.length - 1]

        if (peek.right && peek.right !== lastVisited) {
            curr = peek.right
        } else {
            ans.push(peek.val)
            lastVisited = stack.pop()
        }
    }

    return ans

};