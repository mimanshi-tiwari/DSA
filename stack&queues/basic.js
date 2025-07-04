let stack = []

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log('Stack after pushing 4 elements:', stack)
console.log(stack.pop())
console.log('Stack after popping an element:', stack)

stack.push(5)
console.log('stack ', stack);

console.log('stack[stack.length -1] peek/top ', stack[stack.length -1]);
stack[3] //! invalid stack operation

let queue = []

queue.push(1)
queue.push(2)
queue.push(3) //* enqueue operation
queue.push(4)

console.log('queue ', queue);

console.log(queue.shift()) // * dequeue operation

console.log('peek/front', queue[0]) // * peek operation

queue.pop() // ! invalid queue operation, removes last element