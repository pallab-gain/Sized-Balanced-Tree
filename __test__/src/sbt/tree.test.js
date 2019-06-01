'use strict';
// eslint-disable-next-line no-unused-vars
/* global global, describe, it, before  */

const { expect } = require('chai');
const BST = require('../../../src/sbt/tree');

describe('BST test suit', () => {
  describe('add test suit', () => {
    let bst = new BST();
    for (let i = 1; i < 10; i += 1) {
      it(`size of the tree should be ${i}`, () => {
        bst.add(i);
        expect(bst.getSize()).to.be.equal(i);
      });
    }
  });
  describe('height balanced test suit', () => {
    let bst = new BST();
    for (let i = 1; i < 10; i += 1) {
      it(`height between left and right nodes of the tree should be below 2. i.e. 0 or 1`, () => {
        bst.add(i);
        expect(bst.isBalanced()).to.be.equal(true);
      });
    }
  });
});
