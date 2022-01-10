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

  get verticalPoints() {
    const points = [];

    const start = Math.min(this.from.y, this.to.y);
    const end = Math.max(this.from.y, this.to.y);

    for (let i = start; i <= end; i++) {
      const key = `${this.from.x}-${i}`;
      points.push(key);
    }

    return points;
  }

  get horizontalPoints() {
    const points = [];

    const start = Math.min(this.from.x, this.to.x);
    const end = Math.max(this.from.x, this.to.x);

    for (let i = start; i <= end; i++) {
      const key = `${i}-${this.from.y}`;
      points.push(key);
    }

    return points;
  }

  get diagonalPoints() {
    const points = [];
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
      points.push(key);
      i++;
    }

    return points;
  }

  getPoints() {
    const direction = this.getDirection();

    switch (direction) {
      case Direction.Vertical:
        return this.verticalPoints;
      case Direction.Horizontal:
        return this.horizontalPoints;
      case Direction.Diagonal:
        return this.diagonalPoints;
    }
  }
}

module.exports = Line;
