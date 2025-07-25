/**
 * TODO: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let lca = null

    function traverse(curr) {
        if (!curr) return 0

        let left = traverse(curr.left)
        let right = traverse(curr.right)
        if (left && right && !lca) {
            lca = curr
        }
        if (curr.val === p.val || curr.val === q.val) {
            if ((left || right) && !lca) {
                lca = curr
            }
            return 1
        }
        if (left || right) {
            return 1
        }
        return 0
    }

    traverse(root)
    return lca

};