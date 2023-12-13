const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';

  for (let index = 0; index < str.length;) {
    const char = str[index];

    let sum = 1;
    let nextIndex = index + 1;

    for (; nextIndex < str.length; nextIndex++) {
      if (char === str[nextIndex]) sum++;
      else break;
    }

    sum === 1 ? result += char : result += sum + char;
    index = nextIndex;
  }

  return result;
}

module.exports = {
  encodeLine
};
