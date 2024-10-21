// src/components/ATMQueue.js
class ATMQueue {
    constructor() {
      this.queue = [];
    }
  
    // Add a person to the queue (enqueue)
    enqueue(person) {
      this.queue.push(person);
    }
  
    // Remove and return the first person from the queue (dequeue)
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.queue.shift();
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.queue.length === 0;
    }
  
    // View the first person in the queue
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.queue[0];
    }
  
    // Get the length of the queue
    size() {
      return this.queue.length;
    }
  }
  
  export default ATMQueue;
  