'use strict';

const {
  size
} = require('./utils');

const {
  rotateLeft,
  rotateRight
} = require('./rotate');

/**
 * @private
 * @param {Node|Undefined|Object} pnode
 * @param {Boolean} flag
 * @return {Node|undefined|Object}
 */
const maintain = (pnode = undefined, flag = false) => {
  if (!pnode) {
    return undefined;
  }

  if (!flag) {
    if (pnode.left && size(pnode.left.left) > size(pnode.right)) {
      pnode = rotateRight(pnode);
    } else if (pnode.left && size(pnode.left.right) > size(pnode.right)) {
      pnode.left = rotateLeft(pnode.left);
      pnode = rotateRight(pnode);
    } else {
      return pnode;
    }
  } else {
    if (pnode.right && size(pnode.right.right) > size(pnode.left)) {
      pnode = rotateLeft(pnode);
    } else if (pnode.right && size(pnode.right.left) > size(pnode.left)) {
      pnode.right = rotateRight(pnode.right);
      pnode = rotateLeft(pnode);
    } else {
      return pnode;
    }
  }
  pnode.left = maintain(pnode.left, false);
  pnode.right = maintain(pnode.right, true);
  pnode = maintain(pnode, false);
  pnode = maintain(pnode, true);
  return pnode;
};

exports.maintain = maintain;
