const { testInput, puzzleInput } = require("../input");
const { parseBinaryDiagnostics } = require("../utils");

const getLifeSupportRatings = require("./part-2");

const testBinaryDiagnostics = parseBinaryDiagnostics(testInput);
const puzzleBinaryDiagnostics = parseBinaryDiagnostics(puzzleInput);

test("Multiplication of life support ratings (Oxygen & CO2 Scrubber) for test input must be equal to 230", () => {
  const { oxygenGeneratorRating, CO2ScrubberRating } = getLifeSupportRatings(
    testBinaryDiagnostics
  );
  expect(oxygenGeneratorRating * CO2ScrubberRating).toBe(230);
});

test("Multiplication of life support ratings (Oxygen & CO2 Scrubber) for puzzle input must be equal to 3385170", () => {
  const { oxygenGeneratorRating, CO2ScrubberRating } = getLifeSupportRatings(
    puzzleBinaryDiagnostics
  );
  expect(oxygenGeneratorRating * CO2ScrubberRating).toBe(3385170);
});
