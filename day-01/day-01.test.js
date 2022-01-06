const { testInput, puzzleInput } = require("./input");
const { parseDepthMeasurements } = require("./utils");

const calculateDepthIncreases = require("./part-1");

test("Depth measurement increase for test input must be equal to 7", () => {
  const depthMeasurements = parseDepthMeasurements(testInput);
  expect(calculateDepthIncreases(depthMeasurements)).toBe(7);
});

test("Depth measurement increase for puzzle input must be equal to 1121", () => {
  const depthMeasurements = parseDepthMeasurements(puzzleInput);
  expect(calculateDepthIncreases(depthMeasurements)).toBe(1121);
});
