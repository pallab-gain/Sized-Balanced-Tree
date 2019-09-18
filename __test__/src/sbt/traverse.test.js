const { expect } = require('chai');
const SBT = require('../../../src/sbt/tree');

const printedTree = `└── 5
    ├── 2
    │   ├── 2
    │   └── 3
    └── 7
        └── 9
`;

describe('traverse test suit', () => {
  let sbt = new SBT();
  beforeEach(() => {
    sbt = undefined;
    sbt = new SBT();

  });
  it('should print tree', () => {
    sbt.add(7);
    sbt.add(3);
    sbt.add(5);
    sbt.add(2);
    sbt.add(9);
    sbt.add(2);

    expect(sbt.traverse()).to.be.equal(printedTree);
  });
  it('should handle empty tree', () => {
      sbt.traverse();
      expect(sbt.traverse()).to.be.equal('');
  });
});
