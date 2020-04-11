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
    this.length = 0;
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
    this.length++;
  }

  insertAfter(data, targetNode) {
    let current = this.head;

    while (current) {
      if (current.data === targetNode) {
        const node = new DoubleNode(data);
        if (current === this.tail) {
          this.addNode(node);
        } else {
          current.next.previous = node;
          node.previous = current;
          node.next = current.next;
          current.next = node;
          this.length++;
        }
      }
      current = current.next;
    }
  }

  removeNode(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = this.head.next;
          this.head.previous = null;
        } else if (current === this.tail) {
          this.tail = this.tail.previous;
          this.tail.next = null;
        } else {
          current.previous.next = current.next;
          current.next.previous = current.previous;
        }
        this.length--;
      }
      current = current.next;
    }
  }
}
