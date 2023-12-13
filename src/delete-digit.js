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
  const digitArray = String(n).split('');

  return Math.max(
    ...new Array(digitArray.length).fill().map((_, index) => {
      const digitArrayClone = [...digitArray];

      digitArrayClone.splice(index, 1);

      return Number(digitArrayClone.join(''));
    }),
  );
}

module.exports = {
  deleteDigit
};
