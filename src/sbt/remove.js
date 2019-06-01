'use strict';
const {
  size
} = require('./utils');

const {
  maintain
} = require('./maintain');
const {
  selectFirst
} = require('./select');

/**
 *
 * @private
 * @param {Node|Object|undefined} pnode
 * @param {String|Number|null} key
 * @param {Function} comparator
 * @return {Node|Object|undefined}
 */
const remove = (pnode = undefined, key = null, comparator = undefined) => {
  if (!comparator) {
    throw new Error(`comparator not defined`);
  }
  if (!pnode) {
    return undefined;
  }
  let cmp = comparator(key, pnode.key);
  if (cmp < 0) {
    pnode.left = remove(pnode.left, key, comparator);
  } else if (cmp > 0) {
    pnode.right = remove(pnode.right, key, comparator);
  } else {
    if (!pnode.left) {
      return pnode.right;
    } else if (!pnode.right) {
      return pnode.left;
    } else {
      let successor = selectFirst(pnode.right);
      let tempKey = pnode.key;
      pnode.key = successor.key;
      pnode.value = successor.value;
      successor.key = tempKey;
      pnode.right = remove(pnode.right, tempKey, comparator);
    }
  }
  pnode = maintain(pnode);
  pnode.size = size(pnode.left) + size(pnode.right) + 1;
  return pnode;
};

exports.remove = remove;
