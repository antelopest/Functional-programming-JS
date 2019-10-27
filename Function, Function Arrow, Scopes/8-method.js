'use strict'

const powName = 'pow';

const obj1 = {
  fn1: function inc (a) {
    return ++a;
  },
  sum: function (a, b) {
    return a + b;
  },
  inc(a) {
    return ++a;
  },
  max: (a, b) => {
    return a > b ? a : b;
  },
  min: (a, b) => {
    return a > b ? a : b
  },
  dec: a => --a,
  [powName](a, b) {
    return Math.pow(a, b);
  }
};