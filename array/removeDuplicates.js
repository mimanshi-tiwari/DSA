// Beter solution to remove duplicates in a sorted array
function removeDuplicates1 (arr) {
   let x = 1
   for (let i=1; i<arr.length ; i++) {
       if (arr[x-1] !== arr[i] && arr[i] > arr[x-1]) {
           arr[x] = arr[i]
           x++
       }
   }
  return {arr,x}
}

const a1 = [-1, -1, 1,1,-2, -2,2,3,3,4,4,5,6,7,8,9,10]
const r1 = removeDuplicates1(a1)

console.log(r1)

// Beter solution to remove duplicates in a sorted array
function removeDuplicates2 (arr) {
   let x = 0
   for (let i=0; i<arr.length ; i++) {
       if (arr[i] > arr[x]) {
           x++
           arr[x] = arr[i]
       }
   }
  return {arr,x: x+1}
}

const a2 = [0,0,1,1,1,2,2,3,3,4]
const r2 = removeDuplicates2(a2)

console.log(r2)


function removeDuplicates3 (arr) {
    const freqMap = new Map()
    const resultArray = []
    for (let i=0; i< arr.length; i++) {
        if (!freqMap.has(arr[i])) {
            freqMap.set(arr[i], 1)
            resultArray.push(arr[i])
        }
    }
    return resultArray
}

const r3 = removeDuplicates3(a2)

console.log(r3)