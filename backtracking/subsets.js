// TODO: https://leetcode.com/problems/subsets/description/

/**
 * Always 2^n subsets for n elements
 * @param {number[]} nums
 * @return {number[][]}
 * O(n*2^n) time complexity, where n is the length of nums
 * O(n*2^n) space complexity, we are using extra space for path array
 */
var subsets = function(arr) {
    let ans = []
    
    function backtrack(path, start) {
        ans.push([...path])
        for(let i = start; i < arr.length; i++) {
            path.push(arr[i])
            backtrack(path, i+1)
            path.pop()
        }
    }

    backtrack([], 0)

    return ans
};
