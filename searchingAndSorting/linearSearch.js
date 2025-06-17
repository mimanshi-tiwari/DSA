// O(n^2) time complexity
// O(1) space complexity

function linearSearch(arr, target) {
    for (let i=0; i< arr.length; i++) {
        if(arr[i] === target) return i
    }
    return -1
}

// Example usage:
const arr = [5, 3, 8, 4, 2];
const target = 4;
const result = linearSearch(arr, target);
console.log(result); // Output: 3 (The index of the target element)
// If the target is not found, it will return -1