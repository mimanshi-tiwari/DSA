/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let p1 = 0
    let count = 0
    for (let i = 0; i < g.length; i++) {

        while (p1 < s.length) {
            if (s[p1] >= g[i]) {
                count++
                p1++
                break
            }
            p1++
        }
        if (p1 === s.length) {
            return count
        }
    }
    return count
};

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let p1 = 0
    let p2 = 0
    let count = 0
    while(p1 < s.length) {
        if(s[p1] >= g[p2]) {
            count++
            p1++
            p2++
        } else {
            p1++
        }
    }
    return count
};