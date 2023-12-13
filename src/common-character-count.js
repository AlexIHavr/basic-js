const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const checkedIndexes = {};
  const s2Array = s2.split('');

  return s1.split('').reduce((count, char1) => {
    const foundedIndex = s2Array.findIndex(
      (char2, index2) => char1 === char2 && !checkedIndexes[index2],
    );

    if (foundedIndex >= 0) {
      checkedIndexes[foundedIndex] = foundedIndex;
      count++;
    }

    return count;
  }, 0);
}

module.exports = {
  getCommonCharacterCount
};
