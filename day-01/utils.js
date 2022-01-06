module.exports.parseDepthMeasurements = function (rawInput) {
  return rawInput.split("\n").filter(Boolean).map(Number);
};
