/**
 * TODO: https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let p1 = 0
    let p2 = height.length - 1
    let w = p2 - p1
    let h = height[p2] < height[p1] ? height[p2] : height[p1]
    let area = w * h
    let maxArea = area
    while (w >= 1) {
        area = w * h
        if (area > maxArea) maxArea = area
        if (h === height[p2]) {
            p2 = p2 - 1
        }
        else {
            p1 = p1 + 1
        }
        w = p2 - p1
        h = height[p2] < height[p1] ? height[p2] : height[p1]
    }
    return maxArea
};