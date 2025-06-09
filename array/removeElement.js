/**
 * Removes duplicates from a sorted array in-place and returns the number of unique elements.
 * This solution uses a two-pointer approach: one pointer (x) tracks the position of the last unique element,
 * while the other (i) iterates through the array. When a new unique value is found (arr[i] > arr[x]),
 * it increments x and updates arr[x] with the new unique value.
 * 
 * @param {number[]} arr - The sorted input array from which duplicates are to be removed.
 * @returns {{arr: number[], x: number}} An object containing the modified array (with unique elements at the start)
 * and 'x', the count of unique elements (k).
 */
// Beter solution to remove duplicates in a sorted array
function removeDuplicates (arr) {
   let x = 0
   for (let i=0; i<arr.length ; i++) {
       if (arr[i] > arr[x]) {
           x++
           arr[x] = a[i]
       }
   }
  return {arr,x: x+1}
}

const a = [-5,-5,-2,-2,-1, -1,0,1,1,1,2,2,3,3,4]
// const a = [0,0,1,1,1,2,2,3,3,4]
const r = removeDuplicates(a)

console.log(r)