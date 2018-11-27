/*
* Library for functions to be tested
*
*/


//create container object for functions to be exported
const lib = {};

//Function that takes an array of numbers and returns them rounded to numbers that are divisible by 5
lib.roundToFive = function(numbers) {
  return numbers.map(x => Math.round(x / 5) * 5)
}


//Function that takes in an array and returns a boolean to show if there's a repeated element in the array
lib.anyRepetitions = function() {
  return [...new Set(arguments)].length < arguments.length ? true : false;
}


//Function that takes in an array and returns a repeated variable in the array
lib.findRepeatedVariable = function (){
  return [...arguments].sort().find((x, y, arr) => x === arr[y + 1]);
}


//Function that will return the sum of the digits of the absolute value of an integer
lib.findSumOfDigits = function(integer) {
  return Math.abs(integer).toString().split('').map(Number).reduce((a, b) => a + b);
}


//Function that will return the median of an array
lib.getMedian = function(arr) {
  arr.sort(function (a, b) {
    return a - b;
  })
  if (arr.length % 2 == 0) {
  return (arr[(arr.length/2 - 1)] + arr[arr.length/2]) / 2;
  } else {
  return arr[Math.floor(arr.length/2)];
  }
}

module.exports = lib;