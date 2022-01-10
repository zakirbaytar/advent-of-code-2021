const { testInput, puzzleInput } = require("../input");
const { parseInput } = require("../utils");

const findFishCount = require("./part-2");

const testInternalTimers = parseInput(testInput);
const puzzleInternalTimers = parseInput(puzzleInput);

test("After 256 days, lanternfish count for test input must be equal to 26984457539", () => {
  expect(findFishCount(testInternalTimers)).toBe(26984457539);
});

test("After 256 days, lanternfish count for puzzle input must be equal to 1738377086345", () => {
  expect(findFishCount(puzzleInternalTimers)).toBe(1738377086345);
});
