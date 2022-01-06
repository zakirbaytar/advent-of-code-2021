function calculateDepthIncreases(depthMeasurements) {
  let increased = 0;
  for (let i = 1; i < depthMeasurements.length; i++) {
    const value = depthMeasurements[i];
    const prevValue = depthMeasurements[i - 1];

    if (value > prevValue) {
      increased++;
    }
  }

  return increased;
}

module.exports = calculateDepthIncreases;
