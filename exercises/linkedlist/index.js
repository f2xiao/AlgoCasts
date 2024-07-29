// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  insertFirst(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      this.head = new Node(data, this.head);
    }

    this.length++;
  }

  size() {
    return this.length;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  clear(){
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  removeFirst(){
    if(this.length === 1){
      this.clear();
    }else{
      this.head = this.head.next;
      this.length --;
    }
  }
}

module.exports = { Node, LinkedList };
