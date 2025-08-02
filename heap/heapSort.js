// * HEAP SORT
// * O(1) space
// * O(n log n) time complexity
// * In-place sorting algorithm
// * Unstable sorting algorithm
// * O(log n) for heapify down and up
// * O(n) for creating heap
// ? O(n) + O (n log n) = O(n log n) for heap sort

// 1. Create max heap from arr
// 2. Swap first and last index value
// 3. Reduce the size of heap
// 4. Heapify down
// 5. Keep repeating [2-4] until all is sorted
// 6. Leaf nodes can be ignored.

// Create max heap
// 1. run loop in reverse
// 2. For each node we create it max heap

// * n/2 = number of parents

let arr = [1,4,10,5,3,7,9,2]

function heapSort(arr) {
    let n = arr.length
    for (let i = Math.floor(n/2) -1; i>= 0 ; i--) {
    heapifyDown(arr, i, n)
    }

    for(let i = n-1; i> 0; i--) {
        [arr[0], arr[i]] = [arr[i] , arr[0]]
        heapifyDown(arr, 0, i)
    }
    return arr
}

const leftIndex = (i) => (i*2) + 1
const rightIndex = (i) => (i*2) + 2

function heapifyDown(arr, i, n) {
    let largest = i
    let left = leftIndex(i)
    let right = rightIndex(i)
    
    if(left < n && arr[largest] < arr[left]) {
        largest = left
    }
    
    if(right < n && arr[largest] < arr[right]) {
        largest = right
    }
    
    if(largest !== i) {
        [arr[i],arr[largest]] = [arr[largest],arr[i]]
        heapifyDown(arr, largest, n)
    }
    
}


console.log(heapSort(arr))







