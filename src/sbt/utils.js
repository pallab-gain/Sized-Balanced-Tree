'use strict';
const size = (tree = undefined) => {
  if (!tree) {
    return 0;
  }
  return tree.size || 0;
};

const height = (node = undefined) => {
  if (!node) {
    return 0;
  }
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
};

const resetSize = (node = undefined) => {
  if (!node) {
    return undefined;
  }
  node.size = size(node.left) + size(node.right) + 1;
  return node;
};

const printFn = (n) => n.key;

exports.size = size;
exports.height = height;
exports.resetSize = resetSize;
exports.printFn = printFn;
