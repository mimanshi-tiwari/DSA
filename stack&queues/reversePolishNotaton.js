/**
 * TODO: https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const operator = ['+', '-', '*', '/']
    const stack = []
    let op1 = 0
    let op2 = 0
    let ans = 0

    for (let i = 0; i < tokens.length; i++) {
        if (operator.indexOf(tokens[i]) === -1) {
            stack.push(tokens[i])
        } else {
            op1 = stack.pop()
            op2 = stack.pop()            
            ans = Math.trunc(eval(`${op2}  ${tokens[i]}  ${op1}`))
            stack.push(ans)
        }
    }
    return Number(stack.pop())
};