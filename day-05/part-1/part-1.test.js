const { testInput, puzzleInput } = require("../input");
const { parseLines } = require("../utils");

const calculateOverlappingLineCount = require("./part-1");

const testLines = parseLines(testInput);
const puzzleLines = parseLines(puzzleInput);

test("For winning board, multiplication of last drawn and sum of all unmarked numbers for test input must be equal to 4512", () => {
  expect(calculateOverlappingLineCount(testLines)).toBe(5);
});

test("For winning board, multiplication of last drawn and sum of all unmarked numbers for puzzle input must be equal to 4662", () => {
  expect(calculateOverlappingLineCount(puzzleLines)).toBe(4826);
});
