/**
 * TODO: https://leetcode.com/problems/remove-outermost-parentheses/
 * ! IMPORTANT
 * ? Good question, very minute details
 * * O(n) time complexity
 * * O(n) space complexity, where n is the length of the string
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    const stack = []
    let ans = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i])
            if (stack.length > 1) ans = ans + s[i]
        }
        else {
            if (stack.length > 1) ans = ans + s[i]
            stack.pop()
        }



    }

    return ans

};

// TODO: Wthout using stack

/**
 * @param {string} s
 * @return {string}
 * * O(n) time complexity
 * * O(1) space complexity,we are not using space for algo writte and storing O(n) for string just to store ans. 
 */
var removeOuterParentheses = function (s) {
    let level = 0
    let ans = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            level++
            if (level > 1) ans = ans + s[i]
        }
        else {
            if (level > 1) ans = ans + s[i]
            level--
        }
    }

    return ans

};