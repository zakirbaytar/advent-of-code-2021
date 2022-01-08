const { testInput, puzzleInput } = require("../input");
const { parseInput } = require("../utils");

const findWinningBoard = require("./part-1");

const testDrawsAndBoard = parseInput(testInput);
const puzzleDrawsAndBoard = parseInput(puzzleInput);

test("For winning board, multiplication of last drawn and sum of all unmarked numbers for test input must be equal to 4512", () => {
  const { draw, board } = findWinningBoard(testDrawsAndBoard);
  expect(draw * board.unmarkedTileSum).toBe(4512);
});

test("For winning board, multiplication of last drawn and sum of all unmarked numbers for puzzle input must be equal to 4662", () => {
  const { draw, board } = findWinningBoard(puzzleDrawsAndBoard);
  expect(draw * board.unmarkedTileSum).toBe(4662);
});
