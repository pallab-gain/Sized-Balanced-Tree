'use strict';

const {
  resetSize
} = require('./utils');

/**
 * @public
 * @param {Node|Undefined} node
 * @return {undefined|Node}
 */
const rotateLeft = (node = undefined) => {
  if (!node) {
    return undefined;
  }
  let x = node.right;
  node.right = x.left;
  x.left = node;
  node = resetSize(node);
  x = resetSize(x);
  return x;
};

/**
 * @public
 * @param {Node|Undefined} node
 * @return {undefined|Node}
 */
const rotateRight = (node = undefined) => {
  if (!node) {
    return undefined;
  }
  let x = node.left;
  node.left = x.right;
  x.right = node;
  node = resetSize(node);
  x = resetSize(x);
  return x;
};

exports.rotateLeft = rotateLeft;
exports.rotateRight = rotateRight;
