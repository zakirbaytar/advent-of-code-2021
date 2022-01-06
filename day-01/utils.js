module.exports.parseDepthMeasurements = function (rawInput) {
  return rawInput.split("\n").filter(Boolean).map(Number);
};

module.exports.calculateSumForGivenWindow = function (
  array,
  startIndex,
  windowLength
) {
  return array
    .slice(startIndex, startIndex + windowLength)
    .reduce((sum, val) => sum + val, 0);
};
