const { testInput, puzzleInput } = require("../input");
const { parseBinaryDiagnostics } = require("../utils");

const generatePowerConsumptionReport = require("./part-1");

const testBinaryDiagnostics = parseBinaryDiagnostics(testInput);
const puzzleBinaryDiagnostics = parseBinaryDiagnostics(puzzleInput);

test("Power consumption of a submarine for test input must be equal to 198", () => {
  const { gamma, epsilon } = generatePowerConsumptionReport(
    testBinaryDiagnostics
  );
  expect(gamma * epsilon).toBe(198);
});

test("Power consumption of a submarine for puzzle input must be equal to 198", () => {
  const { gamma, epsilon } = generatePowerConsumptionReport(
    puzzleBinaryDiagnostics
  );
  expect(gamma * epsilon).toBe(3882564);
});
