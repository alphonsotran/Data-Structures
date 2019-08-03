class Queue {
  constructor() {
    this.collection = [];
  }

  enqueue(value) {
    this.collection.push(value);
  }

  dequeue(){
    this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }
}
