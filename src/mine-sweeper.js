const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function getMatrixElem(matrix, firstIndex, secondIndex) {
    if (secondIndex === undefined) return firstIndex === null ? null : matrix[firstIndex];

    return firstIndex === null || secondIndex === null ? null : matrix[firstIndex][secondIndex];
  }

  return matrix.map((arr, index, initialMatrix) => {
    const downIndex = index + 1 === initialMatrix.length ? null : index + 1;
    const upIndex = index - 1 < 0 ? null : index - 1;

    return arr.map((_, i, initialArr) => {
      let sum = 0;

      const rightIndex = i + 1 === initialArr.length ? null : i + 1;
      const leftIndex = i - 1 < 0 ? null : i - 1;

      [
        getMatrixElem(initialMatrix, upIndex, i),
        getMatrixElem(initialMatrix, upIndex, rightIndex),
        getMatrixElem(initialArr, rightIndex),
        getMatrixElem(initialMatrix, downIndex, rightIndex),
        getMatrixElem(initialMatrix, downIndex, i),
        getMatrixElem(initialMatrix, downIndex, leftIndex),
        getMatrixElem(initialArr, leftIndex),
        getMatrixElem(initialMatrix, upIndex, leftIndex),
      ].forEach((neighbor) => {
        if (neighbor) sum++;
      });

      return sum;
    });
  });
}

module.exports = {
  minesweeper
};
