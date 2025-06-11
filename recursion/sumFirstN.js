(function rec(num) {
    let s=0
    function sum(num) {
        if (num === 0) return
        s += num
        sum(num-1)
    }
    sum(num)
    console.log(s)
}(5));

function sum2(num) {
 if (num === 0 ) return 0

return num + sum2(num-1)
        
}

console.log(sum2(5))