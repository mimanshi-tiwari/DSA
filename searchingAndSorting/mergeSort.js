/**
 * @param {number[]} nums
 * @return {number[]}
 */


var sortArray = function (nums) {
    if (nums.length <= 1) return nums

    let mid = Math.floor(nums.length / 2)
    let left = sortArray(nums.slice(0, mid))
    let right = sortArray(nums.slice(mid))

    return merge(left, right)
};
function merge(a, b) {
    let p1 = 0
    let p2 = 0
    let sortedArr = []
    for (let i = 0; i < a.length + b.length; i++) {
        if ((a[p1] < b[p2] && p1 < a.length) || p2 >= b.length) {
            sortedArr.push(a[p1])
            p1++
        } else {
            sortedArr.push(b[p2])
            p2++
        }
    }

    return sortedArr
}