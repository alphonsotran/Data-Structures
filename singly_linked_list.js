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
}
