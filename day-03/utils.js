module.exports.parseBinaryDiagnostics = function (rawInput) {
  return rawInput.split("\n");
};

module.exports.makeRatingGetter = function (getExpectedValue) {
  if (!getExpectedValue || typeof getExpectedValue !== "function") {
    throw new Error("Callback must be of a type function!");
  }

  return function getRating(binaryDiagnostics, pos = 0) {
    let zeros = 0;
    let ones = 0;

    for (const binaryString of binaryDiagnostics) {
      const value = binaryString[pos];
      if (value === "0") {
        zeros++;
      } else {
        ones++;
      }
    }

    const expectedValue = getExpectedValue(ones, zeros);
    const filteredValues = binaryDiagnostics.filter(
      (binary) => binary[pos] === expectedValue
    );

    if (filteredValues.length === 1) {
      return parseInt(filteredValues[0], 2);
    }

    return getRating(filteredValues, pos + 1);
  };
};
