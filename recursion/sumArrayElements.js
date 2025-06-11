function rec(arr) {
    let counter = 0

    function arraySum(counter) {
        if (counter === arr.length) return 0
        return arr[counter] + arraySum(counter + 1)
    }
    return arraySum(counter)
}

console.log(rec([1, 2, 3, 4, 5]))

function arraySum2(n) {
    if (n === 0) return arr[n]
    return arr[n] + arraySum2(n - 1)
}
const arr = [1, 2, 3, 4, 5]
console.log(arraySum2(arr.length - 1)) // 15


// Function to calculate the sum of odd elements in an array using recursion
// This function takes an array and returns the sum of its odd elements
function arraySumOdd(n) {
    if(n===0) {
        if (arr[n] % 2) return arr[n]
        else return 0
    }
       if (arr[n] % 2) return arr[n] + arraySumOdd(n-1)
       else return 0 + arraySumOdd(n-1)
}
const arrOdd = [2,2,2,3]
console.log(arraySumOdd(arrOdd.length - 1))