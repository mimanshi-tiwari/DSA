/**
 * TODO: https://leetcode.com/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 
 * Number of combinations of n things taken k at a time is denoted by C(n, k) or nCk and is calculated as:
 * C(n, k) = n! / (k! * (n - k)!)
 * 
 * O(k * C(n, k)) time complexity, where n is the length of nums
 * O(k) space complexity, we are using extra space for path array
 * 
 * Time complexity explanation:
 * k(n! / (k! * (n - k)!)) -> k * (n * (n-1) * (n-2) * ... * (n-k+1)) / (k * (k-1) * (k-2) * ... * 1)
 * ? O[k(n! / (k! * (n - k)!))]
 * Space complexity explanation:
 * O(k) for the path array, which can go up to size k in the worst case.
 */
var combine = function(n, k) {
    let ans = []

    function backtrack(path, start) {
        if(path.length === k) {
            ans.push([...path])
            return
        }
        for(let i = start; i <=n; i++) {
            path.push(i)
            backtrack(path, i+1)
            path.pop()
        }
    }

    backtrack([], 1)

    return ans
    
};