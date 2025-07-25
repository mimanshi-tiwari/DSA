/**
 * TODO: https://leetcode.com/problems/insert-into-a-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    const node = new TreeNode(val)
    if(!root) return node

  function insert(curr, val) {
    if(!curr) return

    if(curr.val > val) {
        curr.left ? insert(curr.left, val) : curr.left = node
    } else {
        curr.right ? insert(curr.right, val): curr.right = node
    }
  }  
  insert(root, val)
  return root
};