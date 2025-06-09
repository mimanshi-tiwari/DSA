// TODO:
// Write a JavaScript program to log a star pattern in the shape of a square with a side length of 4.
// The output should look like this:
//
// ****
// ****
// ****
// ****



function squarePattern(n) {
for(let i =0; i< n ; i++) {
  let star =''
  for (let j=0; j< n; j++) {
    star += '* '
  }
  console.log(star)
}
}

let square = squarePattern(4)

console.log(square)


// TODO:
// ? output should be:
// *
// **
// ***
// ****


function triaglePatten(n) {
for(let i =0; i< n ; i++) {
  let star =''
  for (let j=0; j<= i; j++) {
    star += ' * '
  }
  console.log(star)
}
}

let triangle = triaglePatten(7)

console.log(triangle)


// TODO:
// ? output should be:
// 1
// 12
// 123
// 1234
function numberTriagle(n) {
for(let i =0; i< n ; i++) {
  let star =''
  for (let j=0; j<= i; j++) {
    star += ` ${j + 1} `
  }
  console.log(star)
}
}

let numTriangle = numberTriagle(7)

console.log(numTriangle)

// TODO:
// ? output should be:
// 1
// 22
// 333
// 4444
function numberTriagle2(n) {
for(let i =0; i< n ; i++) {
  let star =''
  for (let j=0; j<= i; j++) {
    star += ` ${i + 1} `
  }
  console.log(star)
}
}

let numTriangle2 = numberTriagle2(7)

console.log(numTriangle)


// TODO:
// ? output should be:
// 12345
// 1234
// 123
// 12
// 1
function invertedNumber(n) {
for(let i =0; i< n ; i++) {
  let pattern = ''
  for (let j=0; j< (n-i); j++) {
    pattern += ` ${j + 1} `
  }
  console.log(pattern)
}
}

let invertedNum = invertedNumber(5)

console.log(invertedNum)

// TODO:
// ? output should be:
// *****
// ****
// ***
// **
// *

function invertedStar(n) {
for(let i =0; i< n ; i++) {
  let pattern = ''
  for (let j=0; j< (n-i); j++) {
    pattern += ` * `
  }
  console.log(pattern)
}
}

let invertedStarResult = invertedStar(4)

console.log(invertedStarResult)


function invertedStar2(n) {
for(let i =0; i< n ; i++) {
  let pattern = ''
  for (let j= 0; j< n; j++) {
    if (j >= (n - (i+1))) pattern += ' * '
    else pattern += '   '
  }
  console.log(pattern)
}
}

let invertedStarResult2 = invertedStar2(5)

console.log(invertedStarResult)

// TODO:
// ? output should be:
// 1
// 10
// 101
// 1010
function oneZeroParttern(n) {
for(let i =0; i< n ; i++) {
  let pattern = ''
  for (let j= 0; j<= i; j++) {
    if (j % 2 === 0) pattern += ' 1 '
    else pattern += ' 0 '
  }
  console.log(pattern)
}
}

let oneZeroPartternResult = oneZeroParttern(5)

console.log(oneZeroPartternResult)

// TODO:
// ? output should be:
// 1
// 01
// 010
// 1010
// 10101
let toggle = 1
function oneZeroParttern2(n) {
for(let i =0; i< n ; i++) {
  let pattern = ''
  for (let j= 0; j<= i; j++) {
    pattern += toggle
    if (toggle === 1) toggle = 0
    else toggle = 1
  }
  console.log(pattern)
}
}

let oneZeroPartternResult2 = oneZeroParttern2(8)

console.log(oneZeroPartternResult2)