const { makeRatingGetter } = require("../utils");

function getLifeSupportRatings(binaryDiagnostics) {
  const getOxygenGeneratorRating = makeRatingGetter((ones, zeros) =>
    ones >= zeros ? "1" : "0"
  );
  const getCO2ScrubberRating = makeRatingGetter((ones, zeros) =>
    ones < zeros ? "1" : "0"
  );

  return {
    oxygenGeneratorRating: getOxygenGeneratorRating(binaryDiagnostics),
    CO2ScrubberRating: getCO2ScrubberRating(binaryDiagnostics),
  };
}

module.exports = getLifeSupportRatings;
