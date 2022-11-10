const assertEqual = require('../assertEqual');
const head = require('../head');

//test codes of head.js
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it('it passes when head of [5,6,7] is 8', () => {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it('it passes when head of ["Hello", "Lighthouse", "Labs"] is hello', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });
  it('it passes when head of [] is empty', () => {
    assert.strictEqual(head([]), );
  });
  it('it passes when head of [1] is 1', () => {
    assert.strictEqual(head([1]), 1);
  });
});
//run the test file: npm test test/headTest.js
//We set our Lotide project up with Mocha and Chai ("M & C") and converted headTest.js to use that instead. 
//Our library is now dependent on other libraries, but only in order to run its test suite.


