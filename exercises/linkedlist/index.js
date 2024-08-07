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

  removeLast() {
    if(this.length === 0 || this.length === 1){
      this.tail = null;
      this.head = null;
      this.length = 0;
    }else{
      // find the node right before the tail
      let node = this.head;
      while(node.next.next){
        node = node.next;
      }
      // swap the tail with the node right before the tail 
      this.tail = node;
      this.length --;
    }
  }

  insertLast(data){
    if(this.length === 0){
      this.insertFirst(data);
    }else{
      this.tail = new Node(data, null);
      this.length ++;
    }
  }

  getAt(index){
    if(index >= this.length){
      return null;
    }

    if(index === 0){
      this.getFirst()
    }

    if(index === this.length - 1){
      this.getLast()
    }
    
    let count = 0;
    let node = this.head;
    while(count < index){
      node = node.next;
      count++;
    }
    return node;
  }
}

module.exports = { Node, LinkedList };
