const Board = require("../Board");

/**
 *
 * @param {object} input
 * @param {Number[]} input.draws
 * @param {Number[][]} input.boards
 * @returns
 */
function findWinningBoard({ draws, boards }) {
  const _boards = boards.map((board) => new Board(board));

  for (const draw of draws) {
    for (const board of _boards) {
      if (board.has(draw)) {
        board.add(draw);

        if (board.checkCompletion("row") || board.checkCompletion("column")) {
          return { draw, board };
        }
      }
    }
  }

  throw new Error("Cannot find a winning board!");
}

module.exports = findWinningBoard;
