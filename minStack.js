// stack implementation that keeps track of the minimum value
var MinStack = function() {
  this.stack = [];
  this.min = null;
};

MinStack.prototype.push = function(x) {
  let node = [x];
  if(this.min === null || x <= this.min) {
    // if the current node contains the minimum value, store the previous minimum
    node.push(this.min);
    // set the current node value to be the new minimum
    this.min = x;
  };
  // add new node to the top (end) of the stack
  this.stack.push(node);
};

MinStack.prototype.pop = function() {
  let lastIndex = this.stack.length - 1;
  // if the top of the stack contains the minimum value...
  if(this.stack[lastIndex][0] === this.min) {
    // replace the min with the previous min stored in the node
    this.min = this.stack[lastIndex][1];
  };
  // remove the last node / top of the stack
  return this.stack.pop();
};

MinStack.prototype.top = function() {
  // return the value of the last node / top of the stack
  return this.stack[this.stack.length - 1][0];
};

MinStack.prototype.getMin = function() {
  return this.min;
};
