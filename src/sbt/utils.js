'use strict';
const size = (tree = undefined) => {
  if (!tree) {
    return 0;
  }
  return tree.size || 0;
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
exports.resetSize = resetSize;
exports.printFn = printFn;
