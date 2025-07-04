/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (t) {
    let answer = []
    let stack = []

    for (let i = t.length - 1; i >= 0; i--) {
        while (stack.length) {
            if (t[i] < t[stack[stack.length - 1]]) {
                answer[i] = stack[stack.length - 1] - i
                break
            } else {
                stack.pop()
            }
        }
        if (!answer[i]) answer[i] = 0
        stack.push(i)
    }

    return answer
};