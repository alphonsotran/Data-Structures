function Node(data) {
  this.data = data;
  this.next = null;
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  addNodeAfter(data, targetNode) {
    let current = this.head;
    while (current) {
      if (current.data === targetNode) {
        const newNode = new Node(data);
        if (current === this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          newNode.next = current.next;
          current.next = newNode;
          break;
        }
      }
      current = current.next;
    }
  }

  removeNode(data) {
    let previous = this.head;
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = this.head.next;
        }
        if (current === this.tail) {
          this.tail = previous;
        }
        previous.next = current.next;
      } else {
        previous = current;
      }
      current = current.next;
    }
  }
}

function DoubleNode(data) {
  this.data = data;
  this.next = null;
  this.previous = null;
}

class DoubleLinkedList {
  constructor(props) {
    this.head = null;
    this.tail = null;
  }

  addNode(data) {
    const node = new DoubleNode(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }
}

const list = new SinglyLinkedList();
list.addNode(99);
list.addNode(7);
list.addNode(0);
list.addNode(5);
list.addNodeAfter(100, 5);
list.removeNode(5);
