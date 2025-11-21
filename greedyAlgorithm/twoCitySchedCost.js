/**
 * TODO: https://leetcode.com/problems/two-city-scheduling/
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {

    let costSum = 0
    let aPQ = new MaxPriorityQueue(x => x.diff)


    for (let i = 0; i < costs.length; i++) {
        const [a, b] = costs[i]
        aPQ.enqueue({ a, b, diff: b - a })
    }

    for (let i = 0; i < Math.floor(costs.length / 2); i++) {
        const { a } = aPQ.dequeue()
        costSum += a
    }

    for (let i = 0; i < Math.floor(costs.length / 2); i++) {
        const { b } = aPQ.dequeue()
        costSum += b
    }

    return costSum

};

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {

    let costSum = 0
    costs.sort((a, b) => ((b[1] - b[0]) - (a[1] - a[0])))

    for (i = 0; i < costs.length; i++) {
        if (i < costs.length / 2) {
            costSum += costs[i][0]
        } else {
            costSum += costs[i][1]
        }
    }

    return costSum

};