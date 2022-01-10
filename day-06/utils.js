module.exports.parseInput = function (rawInput) {
  return rawInput.split(",").map(Number);
};

function incrementFishCount(map, internalTimer, increment) {
  if (!map.has(internalTimer)) {
    map.set(internalTimer, 0);
  }
  map.set(internalTimer, map.get(internalTimer) + increment);
}

module.exports.generateCountMap = function (internalTimers) {
  const map = new Map();
  for (const internalTimer of internalTimers) {
    incrementFishCount(map, internalTimer, 1);
  }
  return map;
};

module.exports.sumMapValues = function (map) {
  let sum = 0;
  for ([key, value] of map) {
    sum += value;
  }
  return sum;
};

module.exports.incrementFishCount = incrementFishCount;
