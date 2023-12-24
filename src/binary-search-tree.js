const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.carrot = null;
  }

  root() {
    return this.carrot;
  }

  add(data) {
    this.carrot = addW(this.carrot, data);
    function addW(node, data) {
      if(!node) {
        return new Node(data);
      }
      if(node.data === data) {
        return node;
      }
      if(data < node.data) {
        node.left = addW(node.left, data)
      } else {
        node.right = addW(node.right, data)
      }
      return node;
    }
  }

  has(data) {
    return searchW(this.carrot, data);
    function searchW(node, data) {
      if(!node) {
        return false;
      }
      if(node.data === data) {
        return true;
      }
      return data < node.data ?
        searchW(node.left, data) :
        searchW(node.right, data);
    }
  }

  find(data) {
    return this.has(data) ? this.data : null;
  }

  remove(data) {
    this.carrot = removeNode(this.carrot, data);
    function removeNode(node, data) {
      if(!node) {
        return null;
      }
      if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if(data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }
        if(!node.left) {
          node = node.right;
          return node;
        }
        if(!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if(!this.carrot) {
      return;
    }
    let node = this.carrot;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.carrot) {
      return;
    }
    let node = this.carrot;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};