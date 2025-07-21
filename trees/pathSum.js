/**
 * TODO: https://leetcode.com/problems/path-sum/
 * * TOP DOWN APPROACH
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false
    let sum = 0
    let ans = false

    function pathSum(root, sum) {
        sum += root.val
        if (!root.left && !root.right) {
            if (sum === targetSum && !ans) {
                ans = true
            }
        }

        root.left && pathSum(root.left, sum)
        root.right && pathSum(root.right, sum)
    }
    pathSum(root, sum)
    return ans
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false
    let ans = false
    function pathSum(root, val) {
        if (!root.left && !root.right && root.val === val) {
            ans = ans || true
        }
        root.left && pathSum(root.left, val - root.val)
        root.right && pathSum(root.right, val - root.val)
    }
    pathSum(root, targetSum)
    return ans
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false
    if (!root.left && !root.right) return root.val === targetSum

    let leftSubTreeSum = hasPathSum(root.left, targetSum - root.val)

    let rightSubTreeSum = hasPathSum(root.right, targetSum - root.val)

    return leftSubTreeSum || rightSubTreeSum

};