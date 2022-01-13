const { findMin, findMax } = require("../utils");

function calculateFuelCost(positions, candidatePosition) {
  let fuelCost = 0;

  for (const position of positions) {
    const distance = Math.abs(candidatePosition - position);
    fuelCost += (distance * (distance + 1)) / 2;
  }

  return fuelCost;
}

function findMinimumFuelCost(positions) {
  const minPosition = findMin(positions);
  const maxPosition = findMax(positions);

  let minFuelCost = Infinity;
  for (let position = minPosition; position < maxPosition; position++) {
    const fuelCost = calculateFuelCost(positions, position);
    if (fuelCost < minFuelCost) {
      minFuelCost = fuelCost;
    }
  }

  return minFuelCost;
}

module.exports = findMinimumFuelCost;
