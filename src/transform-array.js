const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  const result = [];

  arr.forEach((value, index, initialArr) => {
    const isNotLastElem = index < initialArr.length - 1;
    const isNotNullAndFirstElem = index >= 1 && initialArr[index - 1] !== null;

    switch (value) {
      case '--double-next':
        if (isNotLastElem) result.push(initialArr[index + 1]);
        break;

      case '--double-prev':
        if (isNotNullAndFirstElem) result.push(initialArr[index - 1]);
        break;

      case '--discard-next':
        if (isNotLastElem) initialArr[index + 1] = null;
        break;

      case '--discard-prev':
        if (isNotNullAndFirstElem) result.splice(-1);
        break;

      default:
        if (value !== null) result.push(value);
        break;
    }
  });

  return result
}

module.exports = {
  transform
};
