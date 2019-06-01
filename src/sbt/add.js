'use strict';
const Node = require('../node/node');
const {
  resetSize
} = require('util');

const {
  maintain
} = require('maintain');

/**
 * @private
 * @param {Node|Object|undefined} node
 * @param {String|Number|null} key
 * @param {Object|undefined} value
 * @param {Function} comparator
 * @return {Node|undefined}
 */
const add = (node = undefined, key = null, value = undefined, comparator = undefined) => {
  if (!comparator) {
    throw new Error(`comparator not defined`);
  }
  if (!node) { return new Node({ key, value }); }
  let cmp = comparator(key, node.key);
  if (cmp < 0) {
    node.left = add(node.left, key, value, comparator);
  } else {
    node.right = add(node.right, key, value);
  }

  node = resetSize(node);
  node = maintain(node, key >= node.key);
  return node;
};

exports.add = add;
