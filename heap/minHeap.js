// Min Heap

class MinHeap {
    constructor() {
        this.heap = [5,10,20,30]
    }
    
    getLeftChildIndex(i) {
        return (2 * i) + 1
    }
    
    getRightChildIndex(i) {
        return (2 * i) + 2
    }
    
    getParentIndex(i) {
        return Math.floor((i-1)/2)
    }
    
    insert(val) {
        this.heap.push(val)
        this.heapifyUp(this.heap.length -1)

    }
    
    heapifyUp(currentIdx) {
        let parentIdx = this.getParentIndex(currentIdx)
        let swap = null
        while(this.heap[parentIdx] > this.heap[currentIdx]) {
            [this.heap[parentIdx], this.heap[currentIdx]] =  [ this.heap[currentIdx], this.heap[parentIdx]]
            currentIdx = parentIdx
            parentIdx = this.getParentIndex(currentIdx)
        }
    }

        // * Extration happens only from the top
    extract() {
        if( this.heap.length < 1) return null
        let ans = this.heap[0] 
        this.heap[0] = this.heap[this.heap.length -1]
        this.heap.pop()
        this.heapufyDown(0)
        return ans
    }
    
    heapufyDown(curr) {
        let left = this.getLeftChildIndex(curr)
        let right = this.getRightChildIndex(curr)
        let swapIdx = this.heap[left] < this.heap[right] ? left : right
        while(this.heap[curr] > this.heap[left] || this.heap[curr] > this.heap[right]) {
            [this.heap[curr], this.heap[swapIdx]] =  [ this.heap[swapIdx], this.heap[curr]]
            
            curr = swapIdx
            left = this.getLeftChildIndex(curr)
            right = this.getRightChildIndex(curr)
            swapIdx = this.heap[left] < this.heap[right] ? left : right
        }
    }
}

let heap = new MinHeap()
heap.insert(1)
heap.insert(0)
console.log(heap.heap)
console.log(heap.extract())
console.log(heap.heap)