/**
 * TODO: https://leetcode.com/problems/next-greater-element-i/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * O(n*n) time complexity
 * O(n) space complexity, where n is the length of nums1, if we don't consider ans array it's O(1)
 */
var nextGreaterElement = function (nums1, nums2) {
    let ans = []
    let jIdx = nums1.length
    for (let i = 0; i < nums1.length; i++) {
        ans[i] = -1
        jIdx = nums1.length
        for (let j = 0; j < nums2.length; j++) {
            if(nums1[i] === nums2[j]) {
                jIdx = j
            }

            if(j > jIdx && nums2[j] > nums1[i]) {
                ans[i] = nums2[j]
                break
            }
        }
    }
    return ans
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (n1, n2) {
    let ans = []
    let hash = {}
    for (let i = 0; i < n2.length; i++) {
        for (let j = i + 1; j < n2.length; j++) {
            if (n2[j] > n2[i]) {
                hash[n2[i]] = n2[j]
                break
            }
        }
    }

    for (let k = 0; k < n1.length; k++) {
        ans[k] = hash[n1[k]] || -1
    }

    return ans
};

/**
 * !IMPORTANT, new solution
 * !All next reater, next smaller, previous greater, previous smaller problems can be solved using this approach.
 * * O(n) time complexity, where n is the length of nums2
 * * O(n) space complexity, where n is the length of nums2
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (n1, n2) {
    let ans = []
    let hash = {}
    let stack = []

    for (let i = n2.length - 1; i >= 0; i--) {
        if (i === n2.length - 1) {
            hash[n2[i]] = -1
        } else if (n2[i] < stack[stack.length - 1]) {
            hash[n2[i]] = stack[stack.length - 1]
        } else {
            while (n2[i] > stack[stack.length - 1] && stack.length) {
                stack.pop()
            }
            hash[n2[i]] = stack[stack.length - 1] || -1
        }
        stack.push(n2[i])
    }

    for (let j = 0; j < n1.length; j++) {
        ans.push(hash[n1[j]])
    }

    return ans
};