/**
 * TODO: https://leetcode.com/problems/binary-tree-level-order-traversal/
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
var levelOrder = function (root) {
    if (!root) return []
    let level = 0
    let q = [[root, level]]
    let ans = []

    while (q.length) {
        let curr = q.shift()
        ans.push(curr)
        level = curr[1] + 1
        curr[0].left && q.push([curr[0].left, level])
        curr[0].right && q.push([curr[0].right, level])
    }
    let result = []
    for (let i = 0; i < ans.length; i++) {
        if (result[ans[i][1]]) {
            result[ans[i][1]].push(ans[i][0].val)
        } else {
            result[ans[i][1]] = [ans[i][0].val]
        }
    }
    return result
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let q = [root]
    let ans  = []

    while(q.length) {
        let levelArr = []
        let levelSize = q.length 
        for(let i =0; i< levelSize; i++) {
            let curr = q.shift()
            levelArr.push(curr.val)
            curr.left && q.push(curr.left)
            curr.right && q.push(curr. right)
        }
        ans.push(levelArr)
    }
  return ans  
};