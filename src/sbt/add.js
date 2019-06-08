'use strict';
const Node = require('../node/node');
const {
  size
} = require('./utils');

const {
  maintain
} = require('./maintain');

/**
 * @private
 * @param {Node|Object|undefined} tree
 * @param {String|Number|null} key
 * @param {Object|undefined} value
 * @param {Function} comparator
 * @return {Node|undefined}
 */
const add = (tree = undefined, key = null, value = undefined, comparator = undefined) => {
  if (!comparator) {
    throw new Error(`comparator not defined`);
  }
  if (!tree) { return new Node({ key, value }); }
  const cmp = comparator(key, tree.key);
  tree.size = size(tree) + 1;
  if (cmp < 0) {
    tree.left = add(tree.left, key, value, comparator);
  } else {
    tree.right = add(tree.right, key, value, comparator);
  }
  tree = maintain(tree, key >= tree.key);
  return tree;
};

exports.add = add;
