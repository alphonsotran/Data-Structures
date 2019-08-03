class Stack {
  constructor() {
    this.count = 0
    this.storage = {}
    this.push = this.push.bind(this)
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    delete this.storage[this.count];
  }

  peek() {
    this.storage[this.count - 1];
  }

  size() {
    this.count
  }
}

var stack1 = new Stack
stack1.push(2)
stack1.push('trent')
stack1.push(5)
stack1.push(7)
stack1.pop()
stack1.peek()
stack1.size()