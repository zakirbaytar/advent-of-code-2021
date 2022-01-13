const { testInput, puzzleInput } = require("../input");
const { parseInput } = require("../utils");

const findMinimumFuelCost = require("./part-1");

const testPositions = parseInput(testInput);
const puzzlePositions = parseInput(puzzleInput);

test("Given horizontal positions, minimum fuel cost with the alignment of that position for test input must be equal to 37", () => {
  expect(findMinimumFuelCost(testPositions)).toBe(37);
});

test("Given horizontal positions, minimum fuel cost with the alignment of that position for test input must be equal to 356992", () => {
  expect(findMinimumFuelCost(puzzlePositions)).toBe(356992);
});
