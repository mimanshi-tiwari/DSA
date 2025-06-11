// Find N factorial using recursion
// N factorial is the product of all positive integers up to N
// N! = N * (N-1) * (N-2) * ... * 1
// Example: 3! = 3 * 2 * 1 = 6
// 0! = 1 (by definition)

function nFactorial(n) {
    if(n==0) return 1
    return n * nFactorial(n-1)
}

console.log(nFactorial(3))