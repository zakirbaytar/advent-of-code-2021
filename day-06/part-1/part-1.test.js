const { testInput, puzzleInput } = require("../input");
const { parseInput } = require("../utils");

const findFishCount = require("./part-1");

const testInternalTimers = parseInput(testInput);
const puzzleInternalTimers = parseInput(puzzleInput);

test("After 80 days, lanternfish count for test input must be equal to 5934", () => {
  expect(findFishCount(testInternalTimers)).toBe(5934);
});

test("After 80 days, lanternfish count for puzzle input must be equal to 387413", () => {
  expect(findFishCount(puzzleInternalTimers)).toBe(387413);
});
