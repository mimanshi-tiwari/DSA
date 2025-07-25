/**
 * TODO: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * * Solution specific to BST
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
        if (!curr) return
        if ((curr.val === p.val || curr.val === q.val) && !lca) {
            lca = curr
        }
        if (p.val > curr.val && q.val < curr.val && !lca) {
            lca = curr
        }

        if (p.val < curr.val && q.val > curr.val && !lca) {
            lca = curr
        }


        if (p.val < curr.val && q.val < curr.val) {
            traverse(curr.left)
        }

        if (p.val > curr.val && q.val > curr.val) {
            traverse(curr.right)
        }
    }

    traverse(root)

    return lca
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * * Same solution as above but more readable
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let lca = null
    function traverse(curr) {
        if (!curr) return

        if (p.val < curr.val && q.val < curr.val) {
            traverse(curr.left)
        } else if (p.val > curr.val && q.val > curr.val) {
            traverse(curr.right)
        } else {
            if (!lca) {
                lca = curr
            }
            return
        }
    }

    traverse(root)

    return lca
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * * Same solution as above but more readable
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (curr, p, q) {
    if (p.val < curr.val && q.val < curr.val) {
        return lowestCommonAncestor(curr.left, p, q)
    } else if (p.val > curr.val && q.val > curr.val) {
        return lowestCommonAncestor(curr.right, p, q)
    } else {
        return curr
    }
};

//* Generic lca solution for any binary tree will also work for BST

/**
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