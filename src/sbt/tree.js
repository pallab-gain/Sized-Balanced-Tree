'use strict';

const {
  comparator
} = require('../utils/comparators');
const {
  select,
  selectFirst,
  selectLast
} = require('./select');
const {
  find,
  contains
} = require('./find');
const {
  add
} = require('./add');
const {
  remove
} = require('./remove');
const {
  traverse
} = require('./traverse');
const {
  size,
  height,
  printFn
} = require('./utils');

class SBT {
  /**
   * @public
   * @param _comparator
   */
  constructor (_comparator = comparator) {
    this.comparator = _comparator;
    this.name = 'Sized Balanced Tree';
    this.root = undefined;
  }

  /**
   * @public
   * @return {Node|Object|undefined} { production: string, name: string, version: string }
   */
  info () {
    return {
      name: this.name,
      version: __VERSION__,
      production: __PRODUCTION__
    };
  }

  /**
   * @private
   * @param {String|Number|null} key
   * @return {Node|Object|undefined} Returns true or false on whether the key is present in the tree
   */
  contains (key = null) {
    return contains(this.root, key, this.comparator);
  }
  /**
   * @public
   * 1 based indexing
   * @param {Number} at Query index
   * @return {undefined|Object} Return element at nth position
   */
  select (at = 0) {
    const node = select(this.root, at);
    return node && node.value;
  }

  /**
   * @public
   * @param {String|Number|null} key
   * @return {Node|Object|undefined} Returns the first object with that matches the key
   */
  find (key = null) {
    const node = find(this.root, key, this.comparator);
    return node;
  }

  /**
   * @public
   * @param {String|Number|null} key
   * @param {Node|Undefined} value
   */
  add (key = null, value = undefined) {
    this.root = add(this.root, key, value, this.comparator);
  }

  /**
   * @public
   * @param {String|Number|null} key
   * @return {Node|Object|undefined} Returns the first object with that matches the key
   */
  remove (key = null) {
    this.root = remove(this.root, key, this.comparator);
  }

  /**
   * @public
   * @return {Node|Object} Return first element in the sorted list
   */
  getMin () {
    const firstNode = selectFirst(this.root);
    return firstNode && firstNode.value;
  }

  /**
   * @public
   * @return {Node|Object} Return last element in the sorted list
   */
  getMax () {
    const lastNode = selectLast(this.root);
    return lastNode && lastNode.value;
  }

  /**
   * @public
   * @return {number} Return total size of the tree
   */
  getSize () {
    return size(this.root);
  }

  /**
   * @public
   * @return {boolean} Returns whether the tree is balanced
   */
  isBalanced () {
    const { left, right } = this.root;
    const leftNodes = height(left);
    const rightNodes = height(right);
    return Math.abs(leftNodes - rightNodes) <= 2;
  }
  /**
   * @public
   * @param printNode
   * @return {string} Return string representation of the tree
   */
  traverse (printNode = printFn) {
    let root = this.root;
    let out = [];
    traverse(root, '', true, (v) => out.push(v), printNode);
    return out.join('');
  }
}

module.exports = SBT;
