/**
 * TODO: https://leetcode.com/problems/subtree-of-another-tree/
 * * O(m*n) time recursion brute force
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (p, q) {
    let isSame = false

    function isSameTree(p, q) {
        if (!p && !q) return true
        if (!p || !q) return false

        return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }

    function traverse(p) {
        if (!p) return
        if (p.val === q.val && !isSame) {
            if (isSameTree(p, q)) {
                isSame = true
            }
        }
        traverse(p.left)
        traverse(p.right)
    }
    traverse(p, q)
    return isSame

};


//! SERIATILAZTION APPROACH

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (p, q) {
    let hashP = serialization(p)
    let hashQ = serialization(q)

    // Check if hashQ is part of hashP using Knut Morris Pratt Algorithm

    // We can also do `return hashP.includes(hashQ)`, if you want to avoid using inbuilt fuctions use knut morris pratt algo

    // Create LPS Array 
    let m = hashQ.length
    let i = 0
    let j = 1
    let lps = [0]

    while (j < m) {
        if (hashQ[i] === hashQ[j]) {
            lps[j] = i + 1
            i++
            j++
        } else {
            if (i === 0) {
                lps[j] = 0
                j++
            } else {
                i = lps[i - 1]
            }
        }
    }

    // Compare both strings

    let n = hashP.length
    i = 0
    j = 0

    while (i < n) {
        if (hashP[i] === hashQ[j]) {
            j++
            i++
        } else {
            if (j === 0) {
                i++
            } else {
                j = lps[j - 1]
            }
        }
        if (j === m) {
            return true
        }
    }

    return false

};


function serialization(root) {
    let hash = ''
    function traverse(curr) {
        if (!curr) {
            hash += `,#,`
            return
        }
        hash += `,${curr.val},`
        traverse(curr.left)
        traverse(curr.right)
    }
    traverse(root)
    return hash
}