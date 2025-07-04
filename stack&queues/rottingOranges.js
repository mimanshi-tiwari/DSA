/**
 * TODO: https://leetcode.com/problems/rotting-oranges/
 * @param {number[][]} grid
 * @return {number}
 * O(N*m) time complexity, where N is the number of rows and M is the number of columns in the grid
 * O(N*m) space complexity, where N is the number of rows and M is the number of columns in the grid
 */
var orangesRotting = function (grid) {
    const mapF = {}
    const r = []

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                mapF[`${i},${j}`] = true
            } else if (grid[i][j] === 2) {
                r.push([i, j, 0])
            }
        }
    }
    const rottenLen = r.length
    const freshLen = Object.keys(mapF)?.length
    if (!rottenLen && !freshLen) return 0
    if(!rottenLen) return -1
    if (!freshLen) return 0

    let rQuards = null
    let left = null
    let right = null
    let top = null
    let bottom = null
    let minutes = 0
    while (r.length) {
        [x, y, min] = r.shift()
        if(min > minutes) minutes = min
        top = [x - 1, y, min + 1]
        bottom = [x + 1, y, min + 1]
        left = [x, y - 1, min + 1]
        right = [x, y + 1, min + 1]

        if (mapF[`${top[0]},${top[1]}`]) {
            delete mapF[`${top[0]},${top[1]}`]
            r.push(top)
        }
        if (mapF[`${bottom[0]},${bottom[1]}`]) {
            delete mapF[`${bottom[0]},${bottom[1]}`]
            r.push(bottom)
        } if (mapF[`${left[0]},${left[1]}`]) {
            delete mapF[`${left[0]},${left[1]}`]
            r.push(left)
        } if (mapF[`${right[0]},${right[1]}`]) {
            delete mapF[`${right[0]},${right[1]}`]
            r.push(right)
        }
    }
    if (Object.keys(mapF)?.length) return -1
    return minutes
};