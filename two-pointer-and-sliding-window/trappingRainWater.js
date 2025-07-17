
/**
 * TODO: https://leetcode.com/problems/trapping-rain-water/
 * O(n) time complexity
 * O(n) space complexity
 * ! IMPORTANTS
 * @param {number[]} height
 * @return {number}
 */
var trap = function (a) {
    let ml = [a[0]]
    let mr = []
    mr[a.length-1] = a[a.length -1]

    for (let i = 1; i < a.length; i++) {
        ml[i] = Math.max(ml[i-1], a[i])
    }

    for (let i = a.length - 2; i >= 0; i--) {
        mr[i] = Math.max(mr[i+1], a[i])
    }
  
    let min = 0
    let unit = 0
    let waterTrapped = 0
    for (let i = 0; i < a.length; i++) {
        waterTrapped = Math.min(ml[i], mr[i]) - a[i]
        unit = unit + (waterTrapped > 0 ? waterTrapped : 0)
    }

    return unit
};