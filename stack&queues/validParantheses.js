/**
 * TODO: https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 * O(n) time complexity
 * O(n) space complexity, where n is the length of the stack
 */
var isValid = function (s) {
    const stack = []
    let bracket = ''

    const open = ['(', '[', '{']
    const close = [')', ']', '}']

    for (let b of s) {
        if (open.indexOf(b) !== -1) {
            stack.push(b)
        } else {
            bracket = stack.pop()
            if (close.indexOf(b) !== open.indexOf(bracket)) {
                return false
            }
        }
    }

    return stack.length === 0

};