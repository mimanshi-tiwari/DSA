// TODO: https://leetcode.com/problems/implement-queue-using-stacks/


var MyQueue = function () {
    this.s1 = []
    this.s2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.s1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.s1.length === 0) return undefined
    if (this.s1.length === 1) {
        return this.s1.pop()
    }

    while (this.s1.length > 1) {
        this.s2.push(this.s1.pop())
    }
    const returnVal = this.s1.pop()

    while (this.s2.length) {
        this.s1.push(this.s2.pop())
    }

    return returnVal
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.s1.length === 0) return undefined

    while (this.s1.length > 1) {
        this.s2.push(this.s1.pop())
    }
    const returnVal = this.s1.pop()
    this.s1.push(returnVal)

    while (this.s2.length) {
        this.s1.push(this.s2.pop())
    }

    return returnVal
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.s1.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */