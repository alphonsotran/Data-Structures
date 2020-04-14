class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
    this.push = this.push.bind(this);
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
    this.count;
  }
}
