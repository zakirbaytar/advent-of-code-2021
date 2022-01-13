const { testInput, puzzleInput } = require("../input");
const { parseInput } = require("../utils");

const findMinimumFuelCost = require("./part-2");

const testPositions = parseInput(testInput);
const puzzlePositions = parseInput(puzzleInput);

test("Given horizontal positions, minimum fuel cost with the alignment of that position for test input must be equal to 168", () => {
  expect(findMinimumFuelCost(testPositions)).toBe(168);
});

test("Given horizontal positions, minimum fuel cost with the alignment of that position for test input must be equal to 101268110", () => {
  expect(findMinimumFuelCost(puzzlePositions)).toBe(101268110);
});
