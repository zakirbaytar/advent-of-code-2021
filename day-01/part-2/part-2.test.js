const { testInput, puzzleInput } = require("../input");
const { parseDepthMeasurements } = require("../utils");

const countDepthIncreasesOfSlidingWindow = require("./part-2");

const testDepthMeasurements = parseDepthMeasurements(testInput);
const puzzleDepthMeasurements = parseDepthMeasurements(puzzleInput);

test("Depth measurement increase for sums of a three-measurement sliding window for test input must be equal to 5", () => {
  expect(countDepthIncreasesOfSlidingWindow(testDepthMeasurements, 3)).toBe(5);
});

test("Depth measurement increase for sums of a three-measurement sliding window for puzzle input must be equal to ", () => {
  expect(countDepthIncreasesOfSlidingWindow(puzzleDepthMeasurements, 3)).toBe(
    1065
  );
});
