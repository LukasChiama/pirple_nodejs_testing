/*
*Tests for functions in the app library
*
*/

//Load dependencies
const assert = require("assert");
const lib = require("./../app/lib");


//create container for tests
const tests = {};


//Test function that rounds numbers in an array provided to nearest whole number divisible by 5
tests['RoundToFive function should take an array of numbers return its nearest whole numbers divisible by 5'] = function(done) {
  const result = lib.roundToFive([31, 4, 9, 99, 14]);
  assert.ok(result, [30, 5, 10, 100, 15]);
  done();
}


//Test function that checks whether there is a repeated variable in an array
tests['AnyRepetitions function tests whether an array contains a repeated term and returns a boolean'] = function(done) {
  const firstResult = lib.anyRepetitions('a', 65, 23, 1.5, 1.45, 'a', 'd', 10);
  const secondResult = lib.anyRepetitions([22, 12, 2, 5, 90]);
  assert.strictEqual(firstResult, true);
  assert.strictEqual(secondResult, false);
  done();
}


//Test function that checks whether an array contains a repeated variable and then returns that variable
tests['findRepeatedVariable function returns the repeated variable in an array if there is any'] = function(done) {
  const result = lib.findRepeatedVariable(4, 5, 12, 90, 9, "p", 9, 'u');
  assert.strictEqual(result, 9);
  done();
}


//Test function that sums the digits of an absolute value of integers
tests['sumOfDigits function sums the digits of the absolute value of an integer'] = function(done) {
  const firstResult = lib.findSumOfDigits(-809);
  const secondResult = lib.findSumOfDigits(20389);
  assert.strictEqual(firstResult, 17);
  assert.strictEqual(secondResult, 22);
  done();
}


//Test function that finds the median of an array.
//This test is designed to fail so it will output error details
tests['getMedian is a function that finds the median of an array of numbers'] = function(done) {
  const failingResult = lib.getMedian([3, 8, -2, -5, 23, 9]);
  assert.strictEqual(failingResult, 5);
  done();
}


module.exports = tests;