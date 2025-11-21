/**
 * TODO: https://leetcode.com/problems/min-cost-climbing-stairs/
 * @param {number[]} cost
 * @return {number}
 */


var minCostClimbingStairs = function (cost) {
    let minCost = [cost[0], cost[1]]

    for (let i = 2; i <= cost.length; i++) {
        minCost[i] = Math.min(minCost[i - 1], minCost[i - 2]) + (cost[i] || 0)
    }
    return minCost[cost.length]

};