/**
 * TODO: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    function traverse(curr) {
        if (!curr) return
        if (curr.left)
            curr.left.next = curr.right
        if (curr.right && curr.next)
            curr.right.next = curr.next.left

        traverse(curr.left)
        traverse(curr.right)
    }

    traverse(root)

    return root
};