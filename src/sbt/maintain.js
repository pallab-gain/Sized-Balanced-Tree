'use strict';

const {
  size
} = require('utils');

const {
  rotateLeft,
  rotateRight
} = require('rotate');

/**
 * @private
 * @param {Node|Undefined} node
 * @param {Boolean} flag
 * @return {Node|undefined}
 */
const maintain = (node = undefined, flag = false) => {
  if (!node) {
    return undefined;
  }
  if (flag) {
    if (node.right && size(node.right.right) > size(node.left)) {
      node = size(node);
    } else if (node.right && size(node.right.left) > size(node.left)) {
      node.right = rotateRight(node.right);
      node = rotateLeft(node);
    } else {
      return node;
    }
  } else {
    if (node.left && size(node.left.left) > size(node.right)) {
      node = rotateRight(node);
    } else if (node.left && size(node.left.right) > size(node.right)) {
      node.left = rotateLeft(node.left);
      node = rotateRight(node);
    } else {
      return node;
    }
  }
  node.left = maintain(node.left, false);
  node.right = maintain(node.right, true);
  node = maintain(node, false);
  node = maintain(node, true);
  return node;
};

exports.maintain = maintain;
