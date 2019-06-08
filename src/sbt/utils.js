'use strict';
const size = (tree = undefined) => {
  if (!tree) {
    return 0;
  }
  return tree.size;
};

const height = (node = undefined) => {
  if (!node) {
    return 0;
  }
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
};

const printFn = (n) => n.key;

exports.size = size;
exports.height = height;
exports.printFn = printFn;
