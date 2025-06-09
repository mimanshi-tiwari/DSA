// In Place means that we are not using any extra space for the output
//     console.log(`WHILE Count:`, count);

// O(n) time complexity, O(1) space complexity

var reverseString = function (s) {
    let n = s.length
    let swap = ''
    for (let i = 0; i < Math.floor(n / 2); i++) {
        swap = s[i]
        s[i] = s[n - (i + 1)]
        s[n - (i + 1)] = swap
    }
}
const r = ['h', 'e', 'l', 'l', 'o']
reverseString(r)
console.log(r) // Output: ['o', 'l', 'l', 'e', 'h']