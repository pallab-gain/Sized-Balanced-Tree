'use strict';

const {
  comparator
} = require('../utils/comparators');
const {
  select,
  selectFirst,
  selectLast
} = require('select');
const {
  find
} = require('find');
const {
  contains
} = require('contains');
const {
  add
} = require('add');
const {
  remove
} = require('remove');
const {
  traverse
} = require('traverse');
const {
  printFn
} = require('utils');

class SBT {
  constructor (_comparator = comparator) {
    this.comparator = _comparator;
    this.name = 'Sized Balanced Tree';
    this.root = undefined;
  }

  /**
   * @private
   * @param {String|Number|null} key
   * @return {Node|Object|undefined} Returns true or false on whether the key is present in the tree
   */
  contains (key = null) {
    const root = { ...this.root };
    return contains(root, key, this.comparator);
  }
  /**
   * @public
   * @param {Node|undefined} root Root of the node
   * @param {Number} at Query index
   * @return {undefined|Object} Return element at nth position
   */
  select (at = 0) {
    const root = { ...this.root };
    const node = select(root, at);
    return node && node.value;
  }

  /**
   * @public
   * @param {String|Number|null} key
   * @return {Node|Object|undefined} Returns the first object with that matches the key
   */
  find (key = null) {
    const root = { ...this.root };
    const node = find(root, key, this.comparator);
    return node;
  }

  /**
   * @public
   * @param {String|Number|null} key
   * @param {Node|Undefined} value
   */
  add (key = undefined, value = undefined) {
    const root = { ...this.root };
    this.root = add(root, key, value, this.comparator);
  }

  /**
   * @public
   * @param {String|Number|null} key
   * @return {Node|Object|undefined} Returns the first object with that matches the key
   */
  remove (key = null) {
    const root = { ...this.root };
    this.root = remove(root, key, this.comparator);
  }

  /**
   * @public
   * @return {Node|Object} Return first element in the sorted list
   */
  getMin () {
    const root = { ...this.root };
    const firstNode = selectFirst(root);
    return firstNode && firstNode.value;
  }

  /**
   * @public
   * @return {Node|Object} Return last element in the sorted list
   */
  getMax () {
    const root = { ...this.root };
    const lastNode = selectLast(root);
    return lastNode && lastNode.value;
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
