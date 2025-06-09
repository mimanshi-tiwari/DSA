function isPalindrome(n) {
    if (n < 0) return false; // negative numbers are not palindromes
    if (n === 0) return true; // 0 is a palindrome
let reverseNum = 0;
  let num = n
  num = Math.abs(num)
  while(num>0) {
    reverseNum = (reverseNum *10) + (num % 10) // % is the modulus operator, which returns the remainder of division (last digit)
    // reverseNum = reverseNum * 10 + num % 10 // this is the same as reverseNum = reverseNum * 10 + (num % 10)
    // reverseNum = reverseNum * 10 + (num % 10) // this is the same as reverseNum = reverseNum * 10 + (num % 10)
    num  = Math.floor(num/10)
  }
  return reverseNum === n
}

let num = 212
const pd = isPalindrome(num)
console.log(pd)