'use strict';
const SBT = require('./../dist/sized-balanced-tree.min');

let tree = new SBT();
const N = 100000;
for (let i = 0; i < N; i += 1) {
  const cur = Math.random() * N;
  tree.add(cur);
}
