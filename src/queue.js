const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  getUnderlyingList() {
    let cur = this.head;
    while(cur) {
      console.log(cur.value);
      cur = cur.next;
    }
  }
  enqueue(value) {
    if(this.length === 0) {
      this.head = new ListNode(value)
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next
      }
      cur.next = new ListNode(value)
    }
    this.length += 1;
  }
  dequeue() {
      let cur = this.head;
      let prev = null;
      let index = 0;
      while(index < this.length) {
        prev = cur;
        cur = cur.next;
        index += 1;
      }
      prev.next = cur.next;
      this.length -= 1;
      return cur.value;


  }
}

module.exports = {
  Queue
};
