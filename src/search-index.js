const PriorityQueue = require('./priority-queue');

// Implement Trie tree data structure

class TrieTree {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
    this.originalStr = '';
  }
  getWord () {
    let output = [];
    let node = this;

    while (node !== null) {
      output.unshift(node.key);
      node = node.parent;
    }
    return output.join('');
  }
  insert (word, originalStr) {
    var node = this;
    if (word) {
      for (let w = 0; w < word.length; w++) {
        let ch = word[w]
        if (!node.children[ch]) {
          node.children[ch] = new TrieTree(ch);
          node.children[ch].parent = node;
          node.children[ch].originalStr = originalStr;
        }
        node = node.children[ch];
        if (w == word.length-1) {
          node.end = true;  //Ending flag
        }
      }
    }
  }

  search (query) {
    var node = this;
    var priorityQueue = new PriorityQueue();

    for (var c of query) {
      if (node.children[c]) {
        node = node.children[c];
      } else {
        return priorityQueue.printPQueue();
      }
    }
    this.findAllWords(node, query, node.originalStr, priorityQueue);
    return priorityQueue.printPQueue();
  }
  findAllWords (node, query, originalStr, priorityQueue) {
    if (node.end) {
      let word = node.getWord()
      if (query === word) {
        priorityQueue.enqueue(word, 1, originalStr)
      } else {
        let priority = word.length - query.length
        priorityQueue.enqueue(word, priority + 2, originalStr)
      }
    }
    for (var child in node.children) {
      this.findAllWords(node.children[child], query, node.children[child].originalStr, priorityQueue);
    }
  }
}
module.exports = TrieTree;
