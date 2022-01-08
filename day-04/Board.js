const { createBoard, sumArray } = require("./utils");

class Board {
  constructor(input) {
    const [board, lookupBoard] = createBoard(input);
    this.board = board;
    this.lookupBoard = lookupBoard;
    this.unmarkedTileSum = input.reduce((sum, rows) => sumArray(rows) + sum, 0);
  }

  has(value) {
    return this.board.has(value);
  }

  add(value) {
    if (this.has(value)) {
      const tile = this.board.get(value);
      tile.marked = true;
      this.unmarkedTileSum -= value;
    }
  }

  _getTile(type, row, column) {
    switch (type) {
      case "row":
        return this.lookupBoard[row][column];
      case "column":
        return this.lookupBoard[column][row];
      default:
        throw new Error("Invalid direction!");
    }
  }

  /**
   * @param {"row"|"column"} type
   * @returns {Boolean}
   */
  checkCompletion(type) {
    for (let i = 0; i < 5; i++) {
      let markedTiles = 0;
      for (let j = 0; j < 5; j++) {
        const tile = this._getTile(type, i, j);
        if (tile.marked) markedTiles++;
      }

      if (markedTiles === 5) return true;
    }

    return false;
  }
}

module.exports = Board;
