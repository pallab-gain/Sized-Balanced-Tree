'use strict';

const {
  size
} = require('./utils');

/**
 * Get the nth element
 * @private
 * @param {Node|Object|undefined} tree Root of the node
 * @param {Number} at Query index
 * @return {Node|Object} Return element at nth position
 */
const select = (tree = undefined, at = 0) => {
  if (!tree) {
    return undefined;
  }
  if (at === size(tree.left) + 1) {
    return tree;
  }
  if (at <= size(tree.left)) {
    return select(tree.left, at);
  } else {
    return select(tree.right, at - 1 - size(tree.left));
  }
};

/**
 * @private
 * @param {Node|Object|undefined} node
 * @return {undefined|Node}
 */
const selectFirst = (node = undefined) => {
  if (!node) {
    return undefined;
  }
  while (node.left) {
    node = node.left;
  }
  return node;
};

/**
 * @private
 * @param {Node|Object|undefined} node
 * @return {undefined|Node}
 */
const selectLast = (node = undefined) => {
  if (!node) {
    return undefined;
  }
  while (node.right) {
    node = node.right;
  }
  return node;
};

exports.select = select;
exports.selectFirst = selectFirst;
exports.selectLast = selectLast;
