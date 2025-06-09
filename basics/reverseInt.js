// num is 32 bit number
function reverseInt(num) {
let reverseNum = 0;
  let isNegative = num < 0
  num = Math.abs(num)
  while(num>0) {
    reverseNum = (reverseNum *10) + (num % 10)
    num  = Math.floor(num/10)
  }
  let limit = Math.pow(2,31)
  if (reverseNum < -limit || reverseNum > limit) return 0
  return isNegative ? -reverseNum : reverseNum
}

let num = 72378
const rv = reverseInt(num)
console.log(rv)