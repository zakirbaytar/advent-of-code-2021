const { testInput, puzzleInput } = require("../input");
const { parseMoveOrders } = require("../utils");

const getSubmarineWithAimPosition = require("./part-2");

const testMoveOrders = parseMoveOrders(testInput);
const puzzleMoveOrders = parseMoveOrders(puzzleInput);

test("Multiplication of submarine depth and horizontal position for test input must be equal to 900 (with aim)", () => {
  const { horizontal, depth } = getSubmarineWithAimPosition(testMoveOrders);
  expect(horizontal * depth).toBe(900);
});

test("Multiplication of submarine depth and horizontal position for puzzle input must be equal to 1781819478 (with aim)", () => {
  const { horizontal, depth } = getSubmarineWithAimPosition(puzzleMoveOrders);
  expect(horizontal * depth).toBe(1781819478);
});
