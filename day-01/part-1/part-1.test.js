const { testInput, puzzleInput } = require("../input");
const { parseDepthMeasurements } = require("../utils");

const calculateDepthIncreases = require("./part-1");

const testDepthMeasurements = parseDepthMeasurements(testInput);
const puzzleDepthMeasurements = parseDepthMeasurements(puzzleInput);

test("Depth measurement increase for test input must be equal to 7", () => {
  expect(calculateDepthIncreases(testDepthMeasurements)).toBe(7);
});

test("Depth measurement increase for puzzle input must be equal to 1121", () => {
  expect(calculateDepthIncreases(puzzleDepthMeasurements)).toBe(1121);
});
