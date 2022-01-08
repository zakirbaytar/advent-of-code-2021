const { testInput, puzzleInput } = require("../input");
const { parseInput } = require("../utils");

const findLastWinningBoard = require("./part-2");

const testDrawsAndBoard = parseInput(testInput);
const puzzleDrawsAndBoard = parseInput(puzzleInput);

test("For last winning board, multiplication of last draw and sum of all unmarked numbers for test input must be equal to 1924", () => {
  const { draw, board } = findLastWinningBoard(testDrawsAndBoard);
  expect(draw * board.unmarkedTileSum).toBe(1924);
});

test("For last winning board, multiplication of last draw and sum of all unmarked numbers for puzzle input must be equal to 12080", () => {
  const { draw, board } = findLastWinningBoard(puzzleDrawsAndBoard);
  expect(draw * board.unmarkedTileSum).toBe(12080);
});
