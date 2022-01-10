const { Direction } = require("./utils");

class Line {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  getDirection() {
    const verticalDiff = this.to.y - this.from.y;
    const horizontalDiff = this.to.x - this.from.x;

    if (verticalDiff === 0) {
      return Direction.Horizontal;
    } else if (horizontalDiff === 0) {
      return Direction.Vertical;
    } else if (Math.abs(horizontalDiff) === Math.abs(verticalDiff)) {
      return Direction.Diagonal;
    } else {
      throw new Error("Invalid input!");
    }
  }

  get verticalCoordinates() {
    const coordinates = [];

    const start = Math.min(this.from.y, this.to.y);
    const end = Math.max(this.from.y, this.to.y);

    for (let i = start; i <= end; i++) {
      const key = `${this.from.x}-${i}`;
      coordinates.push(key);
    }

    return coordinates;
  }

  get horizontalCoordinates() {
    const coordinates = [];

    const start = Math.min(this.from.x, this.to.x);
    const end = Math.max(this.from.x, this.to.x);

    for (let i = start; i <= end; i++) {
      const key = `${i}-${this.from.y}`;
      coordinates.push(key);
    }

    return coordinates;
  }

  get diagonalCoordinates() {
    const coordinates = [];
    const rowStart = this.from.x;
    const columnStart = this.from.y;

    const horizontalDiff = this.to.x - this.from.x;
    const verticalDiff = this.to.y - this.from.y;
    const horizontalStep = horizontalDiff > 0 ? 1 : -1;
    const verticalStep = verticalDiff > 0 ? 1 : -1;

    let i = 0;
    while (i <= Math.abs(horizontalDiff)) {
      const rowValue = rowStart + horizontalStep * i;
      const columnValue = columnStart + verticalStep * i;
      const key = `${rowValue}-${columnValue}`;
      coordinates.push(key);
      i++;
    }

    return coordinates;
  }

  getCoordinates() {
    const direction = this.getDirection();

    switch (direction) {
      case Direction.Vertical:
        return this.verticalCoordinates;
      case Direction.Horizontal:
        return this.horizontalCoordinates;
      case Direction.Diagonal:
        return this.diagonalCoordinates;
    }
  }
}

module.exports = Line;
