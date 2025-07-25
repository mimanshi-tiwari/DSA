// TODO: https://leetcode.com/problems/validate-binary-search-tree/

/**
 * * Top Down Approach
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
var isValidBST = function (root) {
    let isBST = true
    function traverse(curr, lowerThan, higherthan) {

        if ((lowerThan !== null && curr.val <= lowerThan) || (higherthan !== null && curr.val >= higherthan)) {
            isBST = isBST && false
        }

        curr.left && traverse(curr.left, lowerThan, curr.val)
        curr.right && traverse(curr.right, curr.val, higherthan)
    }

    traverse(root, null, null)
    return isBST
};

/**
 * * * Bottom Up Approach
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
var isValidBST = function (root) {
    let isBST = true
    function traverse(curr, lowerThan, higherthan) {
        if (!curr) return true
        if ((lowerThan !== null && curr.val <= lowerThan) || (higherthan !== null && curr.val >= higherthan)) {
            return false
        }

        let isLeftBST = traverse(curr.left, lowerThan, curr.val)
        let isRightBST = traverse(curr.right, curr.val, higherthan)

        return isLeftBST && isRightBST
    }

    return traverse(root, null, null)

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
 * @return {boolean}
 */
var isValidBST = function (root, lowerThan = null, higherthan = null) {
    if (!root) return true
    if ((lowerThan !== null && root.val <= lowerThan) || (higherthan !== null && root.val >= higherthan)) {
        return false
    }

    let isLeftBST = isValidBST(root.left, lowerThan, root.val)
    let isRightBST = isValidBST(root.right, root.val, higherthan)

    return isLeftBST && isRightBST

};