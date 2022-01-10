function parsePoint(point) {
  const [x, y] = point.split(",").map(Number);
  return { x, y };
}

function parseLine(line) {
  return line.split(" -> ").map(parsePoint);
}

module.exports.Direction = Object.freeze({
  Vertical: "VERTICAL",
  Horizontal: "HORIZONTAL",
  Diagonal: "DIAGONAL",
});

module.exports.parseLines = function (rawInput) {
  return rawInput.split("\n").map(parseLine);
};
