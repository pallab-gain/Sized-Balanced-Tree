'use strict';
const {
  selectFirst
} = require('select');

/**
 *
 * @private
 * @param {Node|Object|undefined} node
 * @param {String|Number|null} key
 * @param {Function} comparator
 * @return {Node|undefined}
 */
const remove = (node = undefined, key = null, comparator = undefined) => {
  if (!comparator) {
    throw new Error(`comparator not defined`);
  }
  if (!node) {
    return undefined;
  }
  let cmp = comparator(key, node.key);
  if (cmp < 0) {
    node.left = remove(node.left, key, comparator);
  } else if (cmp > 0) {
    node.right = remove(node.right, key, comparator);
  } else {
    if (!node.right) { node = node.left; } else if (!node.left) { node = node.right; } else {
      let remove = selectFirst(node.right);
      node.value = remove.value;
      node.key = remove.key;
      remove(node.right, node.key, comparator);
    }
  }
  return node;
};

exports.remove = remove;
