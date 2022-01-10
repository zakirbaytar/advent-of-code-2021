const { Direction } = require("../utils");
const Line = require("../Line");

/**
 * @typedef {object} Point
 * @property {number} Point.x
 * @property {number} Point.y
 */

/**
 * @param {[Point]} hydrothermalVentMap
 */
function calculateOverlappingLineCount(hydrothermalVentMap) {
  const coordinates = {};

  const lines = hydrothermalVentMap.map(([from, to]) => new Line(from, to));
  for (const line of lines) {
    const points = line.getCoordinates();
    for (const point of points) {
      if (coordinates[point]) {
        coordinates[point]++;
      } else {
        coordinates[point] = 1;
      }
    }
  }

  return Object.values(coordinates).filter((value) => value >= 2).length;
}

module.exports = calculateOverlappingLineCount;
