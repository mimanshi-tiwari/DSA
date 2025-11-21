/**
 * TODO: https://leetcode.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 * Time complexity: O(n * n!) where n is the length of nums
 * Space complexity: O(n) for the path array, which can go up to size n in the worst case.
 * if we consider the output array then O(n*n!) as there are n! permutations and each permutation takes O(n) space
 */
var permute = function(nums) {
    let ans = []

    function backtrack(path, hash) {
        if(path.length === nums.length) {
            ans.push([...path]) // O(n)
            return
        }
        for(let i = 0; i<nums.length; i++) {
            if(!hash[nums[i]]) { //O(1)
                path.push(nums[i]) 
                hash[nums[i]] = true
                backtrack(path, hash) // O(n!)
                hash[path[path.length -1]] = false
                path.pop()
            }
        }
    }
    let hash = {}
    backtrack([], hash)
    return ans
    
};