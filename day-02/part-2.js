function moveUp(currentPosition, step) {
  currentPosition.aim -= step;
}

function moveDown(currentPosition, step) {
  currentPosition.aim += step;
}

function moveForward(currentPosition, step) {
  currentPosition.horizontal += step;
  if (currentPosition.aim) {
    currentPosition.depth += step * currentPosition.aim;
  }
}

const Move = {
  up: moveUp,
  down: moveDown,
  forward: moveForward,
};

function getSubmarineWithAimPosition(moveOrders) {
  const submarinePosition = { horizontal: 0, depth: 0, aim: 0 };

  moveOrders.forEach(([position, step]) =>
    Move[position]?.(submarinePosition, step)
  );

  return submarinePosition;
}

module.exports = getSubmarineWithAimPosition;
