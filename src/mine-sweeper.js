const {NotImplementedError} = require("../extensions/index.js");

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
  const result = [];
  let bool = false;
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = 0;
      if (matrix[i][j] === true) {
        bool = true;
        if (j === 0) {
          result[i][j] = 1;
          result[i][j + 1] = 2;
          j++;
        } else {
          result[i][j] = 1;
          result[i][j - 1] = 2;
        }
      } else if (bool) {
        result[i][j] = 1;
      }
    }
  }
  return result;
}

minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]);

module.exports = {
  minesweeper,
};
