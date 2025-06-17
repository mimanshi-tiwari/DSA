// TODO: https://leetcode.com/problems/design-linked-list/description/
function Node(val) {
    this.val = val
    this.next = null
}


var MyLinkedList = function () {
    this.head = null
    this.size = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index > this.size - 1 || this.head === null) return -1
    let count = 0
    let pointer = this.head
    while (count < index) {
        pointer = pointer.next
        count++
    }
    return pointer.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    this.size = this.size + 1
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const newNode = new Node(val)

    if (this.head === null) {
        this.head = newNode
    } else {
        let pointer = this.head
        while (pointer.next !== null) {
            pointer = pointer.next
        }
        pointer.next = newNode
    }
    this.size = this.size + 1
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size || index < 0) return
    if (index === 0) {
        this.addAtHead(val)
        return
    }
    const newNode = new Node(val)
    if (this.head === null) {
        this.head = newNode
    } else {
        let pointer = this.head
        let count = 0

        while (count < index - 1) {
            pointer = pointer.next
            count++
        }
        newNode.next = pointer.next
        pointer.next = newNode
    }

    this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index >= this.size || index < 0) return
    if (this.head === null) return
    if (index === 0) {
        this.head = this.head.next
    } else {
        let count = 0
        let pointer = this.head
        while (count < index - 1) {
            pointer = pointer.next
            count++
        }
        if (pointer.next.next === null) {
            pointer.next = null
        } else
            pointer.next = pointer.next.next

    }

    this.size = this.size - 1

};

MyLinkedList.prototype.print = function () {
    let pointer = this.head
    let result = []
    if (this.head === null) {
        console.log('Empty List')
        return
    }
    while (pointer !== null) {
        result.push(pointer.val)
        pointer = pointer.next
    }
    console.log(result.join(' -> '))
    console.log('this.size ', this.size);
}

//* Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList()
console.log('get 0', obj.get(0))
obj.addAtHead(3)
console.log('get 1', obj.get(1))

obj.print()
obj.addAtTail(6)
console.log('get 1', obj.get(1))

obj.print()
obj.addAtIndex(0, 1)

console.log('get 1', obj.get(1))
console.log('get 2', obj.get(2))
console.log('get 3', obj.get(3))


obj.print()
//   obj.deleteAtIndex(index)
