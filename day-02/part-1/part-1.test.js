const { testInput, puzzleInput } = require("../input");
const { parseMoveOrders } = require("../utils");

const getSubmarinePosition = require("./part-1");

const testMoveOrders = parseMoveOrders(testInput);
const puzzleMoveOrders = parseMoveOrders(puzzleInput);

test("Multiplication of submarine depth and horizontal position for test input must be equal to 150", () => {
  const { horizontal, depth } = getSubmarinePosition(testMoveOrders);
  expect(horizontal * depth).toBe(150);
});

test("Multiplication of submarine depth and horizontal position for puzzle input must be equal to 1635930", () => {
  const { horizontal, depth } = getSubmarinePosition(puzzleMoveOrders);
  expect(horizontal * depth).toBe(1635930);
});
