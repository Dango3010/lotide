//test codes for tail.js
const tail = require('../tail');
const assertEqual = require('../assertEqual');
const result = tail(["Hello", "Lighthouse", "Labs"]);

const assert = require('chai').assert;

describe ('tail#', () => {
  it('return lighthouse', () => {
    assert.deepEqual([result[0]], ["Lighthouse"]);
  });
  it ('pass when returns labs', () => {
    assert.deepEqual([result[1]], ["Labs"]);
  });
  it ('pass when returns 2', () => {
    assert.deepEqual([result.length], [2]);
  });
});