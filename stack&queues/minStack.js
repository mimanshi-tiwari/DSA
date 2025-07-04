
//TODO: https://leetcode.com/problems/min-stack/
// ? All operations must be O(1), given constrain in question
// * we can also use array in sde stack insteadof extra minHash
//* stack [[value, minValue], ...]
var MinStack = function () {
    this.stack = []
    this.minHash = {
    }

};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val)
    if (this.stack.length === 1) {
        this.minHash[this.stack.length] = val
    } else if (this.minHash[this.stack.length - 1] > val) {
        this.minHash[this.stack.length] = val
    } else {
        this.minHash[this.stack.length] = this.minHash[this.stack.length - 1]
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    delete this.minHash[this.stack.length]
    return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minHash[this.stack.length]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


// TODO Without extra space
//* better solution


var MinStack = function () {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.stack.length === 0) {
        this.stack.push([val, val])
    } else {
        const min = Math.min(val, this.stack[this.stack.length - 1][1])
        this.stack.push([val, min])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
     return this.stack[this.stack.length - 1][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */