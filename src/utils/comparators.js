'use strict';

/**
 * @public
 * @param l {Number}
 * @param r {Number}
 * @return {number}
 */
const comparatorAsc = (l, r) => {
  if (l < r) {
    return -1;
  } else if (l > r) {
    return 1;
  } else {
    return 0;
  }
};

/**
 * @public
 * @param l {Number}
 * @param r {Number}
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
const comparatorDesc = (l, r) => {
  if (r < l) {
    return -1;
  } else if (r > l) {
    return 1;
  } else {
    return 0;
  }
};

exports.comparator = comparatorAsc;
