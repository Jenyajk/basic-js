const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return Math.max(...String(n).split('').map((el, index) => +(String(n).slice(0, index) + String(n).slice(index + 1, String(n).length))));
}


module.exports = {
  deleteDigit
};
