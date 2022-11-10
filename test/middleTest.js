const assertArraysEqual = require('../assertArraysEqual'); //don't have to require eqArrays func as well.
const middle = require('../middle');

const assert = require('chai').assert;

describe ('middle#', () => {
  it('passes when returns empty array', () => {
    assert.deepEqual(middle([1, 2]), [])
  });
  it('pass when returns 3', () => {
    assert.deepEqual(middle([1, 2, 3, 8, 9]), [3]);
  });
  it('passes when returns 2,10', () => {
    assert.deepEqual(middle([1, 2, 10, 4]), [2, 10]);
  });
});