
// TODO: https://leetcode.com/problems/implement-stack-using-queues/submissions/1676428064/
// TODO: Using 2 queues
var MyStack = function () {
    this.q1 = []
    this.q2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (this.q1.length === 0) return undefined
    if (this.q1.length === 1) {
        return this.q1.shift()
    }

    while (this.q1.length > 1) {
        this.q2.push(this.q1.shift())
    }
    const returnVal = this.q1.shift()

    while (this.q2.length) {
        this.q1.push(this.q2.shift())
    }

    return returnVal
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    if (this.q1.length === 0) return undefined
    if (this.q1.length === 1) {
        return this.q1[0]
    }

    while (this.q1.length > 1) {
        this.q2.push(this.q1.shift())
    }

    const returnVal = this.q1.shift()

    while (this.q2.length) {
        this.q1.push(this.q2.shift())
    }
    this.q1.push(returnVal)

    return returnVal
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


//? Stack using 1 queue


var MyStack = function () {
    this.q1 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (this.q1.length === 0) return undefined
    if (this.q1.length === 1) {
        return this.q1.shift()
    }
    let counter = 0
    let shiftVal = 0
    while (counter < this.q1.length - 1) {
        shiftVal = this.q1.shift()
        this.q1.push(shiftVal)
        counter++
    }
    shiftVal = this.q1.shift()
    return shiftVal
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    if (this.q1.length === 0) return undefined
    let counter = 0
    let shiftVal = 0
    while (counter < this.q1.length - 1) {
        shiftVal = this.q1.shift()
        this.q1.push(shiftVal)
        counter++
    }
    shiftVal = this.q1.shift()
    this.q1.push(shiftVal)
    return shiftVal
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */