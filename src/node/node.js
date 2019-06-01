'use strict';

/**
 * Node representation of the BST tree
 */
class Node {
  /**
     *
     * @param key {String|Number|null}
     * @param value {Object|undefined}
     * @param left {Node|undefined}
     * @param right {Node|undefined}
     * @param size {Number}
     */
  constructor ({
    key = null,
    value = undefined,
    left = undefined,
    right = undefined,
    size = 1
  }) {
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
    this.size = size;
  }

  /**
     * @private
     * @return {string}
     */
  toString () {
    return `$. ${this.key} -> ${this.value}`;
  }
}

module.exports = Node;
