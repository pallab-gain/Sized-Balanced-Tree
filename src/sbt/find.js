'use strict';

/**
 * @private
 * @param {Node|Object|undefined} tree Root of the node
 * @param {String|Number|null} key
 * @param {Function} comparator
 * @return {Node|Object|undefined} Returns the first Node that match the key
 */
const find = (tree = undefined, key = null, comparator = undefined) => {
  if (!comparator) {
    throw new Error(`comparator not defined`);
  }
  if (!tree) { return undefined; }

  let cmp = comparator(key, tree.key);
  if (cmp < 0) {
    return find(tree.left, key, comparator);
  } else if (cmp > 0) {
    return find(tree.right, key, comparator);
  } else {
    return tree;
  }
};

/**
 * @private
 * @param {Node|Object|undefined} tree Root of the node
 * @param {String|Number|null} key
 * @param {Function} comparator
 * @return {Node|Object|undefined} Returns true or false on whether the key is present in the tree
 */
const contains = (tree = undefined, key = null, comparator = undefined) => {
  if (!comparator) {
    throw new Error(`comparator not defined`);
  }
  if (!tree) { return false; }

  let cmp = comparator(key, tree.key);
  if (cmp < 0) {
    return contains(tree.left, key, comparator);
  } else if (cmp > 0) {
    return contains(tree.right, key, comparator);
  } else {
    return true;
  }
};

exports.find = find;
exports.contains = contains;
