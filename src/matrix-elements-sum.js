const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((sum, arr, index, initialMatrix) => {
    if (!index) return sum + arr.reduce((sumArr, item) => sumArr + item, 0);
    if (index === initialMatrix.length - 1) return sum;

    const nextArr = initialMatrix[index + 1];
    arr.forEach((elem, i) => {
      if (elem !== 0) {
        if (nextArr[i] !== 0) sum += elem + nextArr[i];
        else sum += elem;
      }
    });

    return sum;
  }, 0);
}

module.exports = {
  getMatrixElementsSum
};
