function parseBoard(board) {
  return board.split("\n").map((rows) =>
    rows
      .split(" ")
      .filter((s) => s !== "")
      .map(Number)
  );
}

function parseDraws(draws) {
  return draws.split(",").map(Number);
}

module.exports.parseInput = function (rawInput) {
  const [draws, ...boards] = rawInput.split("\n\n");

  return {
    draws: parseDraws(draws),
    boards: boards.map(parseBoard),
  };
};

module.exports.sumArray = function (array) {
  return array.reduce((sum, value) => sum + value, 0);
};

function createTile(input, i, j) {
  return {
    value: input[i][j],
    row: i,
    column: j,
    marked: false,
  };
}

module.exports.createBoard = function (input) {
  const board = new Map();
  const lookupBoard = [];

  for (let i = 0; i < 5; i++) {
    const lookupRow = [];

    for (let j = 0; j < 5; j++) {
      const value = createTile(input, i, j);
      board.set(input[i][j], value);
      lookupRow.push(value);
    }

    lookupBoard.push(lookupRow);
  }

  return [board, lookupBoard];
};
