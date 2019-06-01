'use strict';

const {
  size
} = require('./utils');

/**
 * @public
 * @param {Node|Undefined} pnode
 * @return {undefined|Node}
 */
const rotateLeft = (pnode = undefined) => {
  if (!pnode) {
    return undefined;
  }
  let pt = pnode.right;
  pnode.right = pt.left;
  pt.left = pnode;
  pt.size = size(pnode);
  pnode.size = size(pnode.left) + size(pnode.right) + 1;
  return pt;
};

/**
 * @public
 * @param {Node|Undefined} pnode
 * @return {undefined|Node}
 */
const rotateRight = (pnode = undefined) => {
  if (!pnode) {
    return undefined;
  }
  let pt = pnode.left;
  pnode.left = pt.right;
  pt.right = pnode;
  pt.size = size(pnode);
  pnode.size = size(pnode.left) + size(pnode.right) + 1;
  return pt;
};

exports.rotateLeft = rotateLeft;
exports.rotateRight = rotateRight;
