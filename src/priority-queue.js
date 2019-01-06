/**
  Priority 1 (highest) : exact match
  Priority 2: lowest string length
  likewise priority .....
**/

class QElement {
  constructor(element, priority, originalElement) {
    this.element = element;
    this.priority = priority;
    this.originalElement = originalElement;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(element, priority, originalElement) {
    var qElement = new QElement(element, priority, originalElement);
    var contain = false;

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.items.push(qElement);
    }
  }
  dequeue() {
    if (this.isEmpty())
      return "Underflow";
    return this.items.shift();
  }

  front() {
    if (this.isEmpty())
      return "No elements in Queue";
    return this.items[0];
  }

  rear() {
    if (this.isEmpty())
      return "No elements in Queue";
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printPQueue() {
    var str = [];
    for (var i = 0; i < this.items.length; i++)
      str.push({
        name: this.items[i].element,
        priority: this.items[i].priority,
        originalStr: this.items[i].originalElement
      });
    return str;
  }
}
module.exports = PriorityQueue;
