'use strict';
// eslint-disable-next-line no-unused-vars
/* global global, describe, it, before, afterEach, beforeEach  */

const { expect } = require('chai');
const BST = require('../../../src/sbt/tree');

describe('BST test suit', () => {
  describe('add test suit', () => {
    let bst = new BST();
    beforeEach(() => {
      bst = undefined;
      bst = new BST();
    });
    it('it should add unique items', () => {
      for (let i = 0; i < 10; i += 1) {
        bst.add(i);
        expect(bst.getSize()).to.be.equal(i + 1);
      }
    });
    it('it should add dublicate items', () => {
      for (let i = 1; i < 10; i += 1) {
        bst.add(i % 5);
        expect(bst.getSize()).to.be.equal(i);
      }
    });
    it('it should balance the height for unique elements', () => {
      for (let i = 0; i < 10; i += 1) {
        bst.add(i);
        expect(bst.isBalanced()).to.be.equal(true);
      }
      expect(bst.getSize()).to.be.equal(10);
    });
    it('it should balance the height for dublicate elements', () => {
      for (let i = 0; i < 100; i += 1) {
        bst.add(i % 10);
        expect(bst.isBalanced()).to.be.equal(true);
      }
      expect(bst.getSize()).to.be.equal(100);
    });
  });

  describe('remove elements test suit', () => {
    let bst = new BST();
    beforeEach(() => {
      bst = undefined;
      bst = new BST();
    });
    it(`should add 10 elements, and then remove all of them`, () => {
      for (let i = 0; i < 10; i += 1) {
        bst.add(i);
      }
      for (let i = 0; i < 10; i += 1) {
        bst.remove(i);
        expect(bst.getSize()).to.be.equal(10 - i - 1);
      }
    });
    it(`should add 10 elements, and then remove 4 of them`, () => {
      for (let i = 0; i < 10; i += 1) {
        bst.add(i);
      }
      for (let i = 9; i > 5; i -= 1) {
        bst.remove(i);
      }
      expect(bst.getSize()).to.be.equal(6);
    });

    it(`should add 10 elements, and then remove 1 item 4 times`, () => {
      let bst = new BST();
      for (let i = 0; i < 10; i += 1) {
        bst.add(i);
      }
      for (let i = 0; i < 4; i += 1) {
        bst.remove(8);
      }
      expect(bst.getSize()).to.be.equal(9);
    });

    it(`should add 10 elements and try to remove element that is not present`, () => {
      let bst = new BST();
      for (let i = 0; i < 10; i += 1) {
        bst.add(i % 5);
      }
      bst.remove(20);
      expect(bst.getSize()).to.be.equal(10);
    });

    it(`should add 10 elements and try to remove one element`, () => {
      let bst = new BST();
      for (let i = 0; i < 10; i += 1) {
        bst.add(i % 5);
      }
      bst.remove(0);
      expect(bst.getSize()).to.be.equal(9);
    });

    it(`should add 10 elements and try to remove two element`, () => {
      let bst = new BST();
      for (let i = 0; i < 10; i += 1) {
        bst.add(i % 5);
      }
      bst.remove(0);
      bst.remove(1);
      expect(bst.getSize()).to.be.equal(8);
    });

    it(`should add 30 elements of [0,1,2,3,4], and then remove 1 of [0,1,2,3,4] of them`, () => {
      for (let i = 0; i < 30; i += 1) {
        bst.add(i % 5);
      }
      for (let i = 0; i < 5; i += 1) {
        bst.remove(i % 5);
      }
      expect(bst.getSize()).to.be.equal(30 - 5);
    });

    it(`should add 30 elements of [0,1,2,3,4], and then remove 2 of [0,1,2,3,4] of them`, () => {
      for (let i = 0; i < 30; i += 1) {
        bst.add(i % 5);
      }
      for (let i = 0; i < 5 * 2; i += 1) {
        bst.remove(i % 5);
      }
      expect(bst.getSize()).to.be.equal(30 - 5 * 2);
    });
  });

  describe('getMin test suit', () => {
    let bst = new BST();
    let elements = [];
    beforeEach(() => {
      elements = [];
      bst = undefined;
      bst = new BST();
    });
    it(`should add 100 random element and find min element from there`, () => {
      for (let i = 0; i < 100; i += 1) {
        let cur = Math.round(Math.random() * 1000);
        elements.push(cur);
        bst.add(cur, cur);
      }
      elements.sort((l, r) => {
        return l - r;
      });
      expect(bst.getMin()).to.be.equal(elements[0]);
    });
  });

  describe('getMax test suit', () => {
    let bst = new BST();
    let elements = [];
    beforeEach(() => {
      elements = [];
      bst = undefined;
      bst = new BST();
    });
    it(`should add 100 random element and find max element from there`, () => {
      for (let i = 0; i < 100; i += 1) {
        let cur = Math.round(Math.random() * 1000);
        elements.push(cur);
        bst.add(cur, cur);
      }
      elements.sort((l, r) => {
        return l - r;
      });
      expect(bst.getMax()).to.be.equal(elements[elements.length - 1]);
    });
  });

  describe('isBalanced test suit', () => {
    let bst = new BST();
    let elements = [];
    beforeEach(() => {
      bst = undefined;
      bst = new BST();
      elements = [];
    });
    it(`should add 1000 random element and should be balanced always`, () => {
      for (let i = 0; i < 10000; i += 1) {
        let cur = Math.round(Math.random() * 100);
        elements.push(cur);
      }
      for (let item of elements) {
        bst.add(item);
      }
      expect(bst.isBalanced()).to.be.equal(true, elements.length);
    });
  });

  describe('getSize test suit', () => {
    let bst = new BST();
    let elements = [];
    beforeEach(() => {
      bst = undefined;
      bst = new BST();
      elements = [];
    });
    it(`should be 1000 sized bst tree`, () => {
      for (let i = 0; i < 10000; i += 1) {
        let cur = Math.round(Math.random() * 100);
        elements.push(cur);
      }
      for (let item of elements) {
        bst.add(item);
      }
      expect(bst.getSize()).to.be.equal(10000);
    });
    it(`should be 0 sized bst tree`, () => {
      expect(bst.getSize()).to.be.equal(0);
    });
  });

  describe('find test suit', () => {
    let bst = new BST();
    let elements = [];
    beforeEach(() => {
      elements = [];
      bst = undefined;
      bst = new BST();
    });
    it(`should find all the element that is among 100, and will not be able to find 200`, () => {
      for (let i = 0; i < 1000; i += 1) {
        let cur = Math.round(Math.random() * 100);
        elements.push(cur);
      }
      for (let item of elements) {
        bst.add(item);
      }
      for (let item of elements) {
        // eslint-disable-next-line no-unused-expressions
        expect(bst.find(item)).to.be.not.undefined;
      }
      // eslint-disable-next-line no-unused-expressions
      expect(bst.find(200)).to.be.undefined;
    });
  });
  describe('contains test suit', () => {
    let bst = new BST();
    let elements = [];
    beforeEach(() => {
      elements = [];
      bst = undefined;
      bst = new BST();
    });
    it(`should contain all the element that is among 100, and will not contain 200`, () => {
      for (let i = 0; i < 1000; i += 1) {
        let cur = Math.round(Math.random() * 100);
        elements.push(cur);
      }
      for (let item of elements) {
        bst.add(item);
      }
      for (let item of elements) {
        // eslint-disable-next-line no-unused-expressions
        expect(bst.contains(item)).to.be.equal(true, item);
      }
      // eslint-disable-next-line no-unused-expressions
      expect(bst.contains(200)).to.be.equal(false, 200);
    });
  });

  describe('select test suit', () => {
    let bst = new BST();
    let elements = [];
    beforeEach(() => {
      elements = [];
      bst = undefined;
      bst = new BST();
    });
    it(`should be able to get ith positioned element from sorted list`, () => {
      for (let i = 0; i < 1000; i += 1) {
        let cur = Math.round(Math.random() * 100);
        elements.push(cur);
      }
      elements.sort((l, r) => {
        return l - r;
      });

      for (let item of elements) {
        bst.add(item, item);
      }
      for (let i = 0; i < 1000; i += 1) {
        // eslint-disable-next-line no-unused-expressions
        expect(bst.select(i + 1)).to.be.equal(elements[i], elements[i]);
      }
    });
  });
});
