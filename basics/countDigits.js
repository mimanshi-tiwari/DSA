function countDigits1(n) {
  if (n===0) return 1 //corner case
  n = Math.abs(n) // convets number to positive, corner case for negative number. absolute value
  let count = 0 
  while(n > 0) {
    n = Math.floor(n/10)
    count++
  }
  return count
}

let num = 345564
const cd1 = countDigits1(num)
console.log(cd1)