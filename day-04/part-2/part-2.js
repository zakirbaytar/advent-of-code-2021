const Board = require("../Board");

/**
 * @param {object} input
 * @param {Number[]} input.draws
 * @param {Number[][]} input.boards
 */
function findLastWinningBoard({ draws, boards }) {
  const finishedBoards = [];
  const _boards = boards.map((board) => new Board(board));

  for (const draw of draws) {
    for (const board of _boards) {
      if (board.isFinished) continue;

      if (board.has(draw)) {
        board.add(draw);

        if (board.checkCompletion("row") || board.checkCompletion("column")) {
          finishedBoards.push({ board, draw });
        }
      }
    }
  }

  return finishedBoards.pop();
}

module.exports = findLastWinningBoard;
