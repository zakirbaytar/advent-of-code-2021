const {
  generateCountMap,
  incrementFishCount,
  sumMapValues,
} = require("../utils");

function findFishCount(internalTimers, days = 256) {
  let state = generateCountMap(internalTimers);

  for (let i = 0; i < days; i++) {
    const nextState = new Map();

    for (const [internalTimer, count] of state) {
      if (internalTimer > 0) {
        incrementFishCount(nextState, internalTimer - 1, count);
      } else if (internalTimer === 0) {
        incrementFishCount(nextState, 6, count);
        incrementFishCount(nextState, 8, count);
      }
    }

    state = nextState;
  }

  return sumMapValues(state);
}

module.exports = findFishCount;
