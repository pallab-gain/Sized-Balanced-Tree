'use strict';

/**
 * @public
 * @param l {Number}
 * @param r {Number}
 * @return {number}
 */
const comparator = (l, r) => {
  if (l < r) {
    return -1;
  } else if (l > r) {
    return 1;
  } else {
    return 0;
  }
};

exports.comparator = comparator;
