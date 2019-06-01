'use strict';

/**
 * @private
 * @param {Node|undefined}root
 * @param prefix
 * @param isTail
 * @param out
 * @param printNode
 */
const traverse = (root, prefix, isTail, out, printNode) => {
  if (root) {
    out(`${prefix}${isTail ? '└── ' : '├── '}${printNode(root)}\n`);
    const indent = prefix + (isTail ? '    ' : '│   ');
    if (root.left) {
      traverse(root.left, indent, false, out, printNode);
    }
    if (root.right) {
      traverse(root.right, indent, true, out, printNode);
    }
  }
};

exports.traverse = traverse;
