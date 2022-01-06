function moveUp(currentPosition, step) {
  currentPosition.depth -= step;
}

function moveDown(currentPosition, step) {
  currentPosition.depth += step;
}

function moveForward(currentPosition, step) {
  currentPosition.horizontal += step;
}

const Move = {
  up: moveUp,
  down: moveDown,
  forward: moveForward,
};

function getSubmarinePosition(moveOrders) {
  const submarinePosition = { horizontal: 0, depth: 0 };

  moveOrders.forEach(([position, step]) =>
    Move[position]?.(submarinePosition, step)
  );

  return submarinePosition;
}

module.exports = getSubmarinePosition;
