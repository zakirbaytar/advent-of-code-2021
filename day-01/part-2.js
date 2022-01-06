const { calculateSumForGivenWindow } = require("./utils");

function countDepthIncreasesOfSlidingWindow(depthMeasurements, window) {
  let increased = 0;
  for (let i = 1; i < depthMeasurements.length - window + 1; i++) {
    const value = calculateSumForGivenWindow(depthMeasurements, i, window);
    const prevValue = calculateSumForGivenWindow(
      depthMeasurements,
      i - 1,
      window
    );

    if (value > prevValue) {
      increased++;
    }
  }

  return increased;
}

module.exports = countDepthIncreasesOfSlidingWindow;
