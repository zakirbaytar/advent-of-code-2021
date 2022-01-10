function findFishCount(internalTimers, days = 80) {
  let state = [...internalTimers];

  for (let i = 0; i < days; i++) {
    let nextState = [];
    for (const internalTimer of state) {
      if (internalTimer > 0) {
        nextState.push(internalTimer - 1);
      } else {
        nextState.push(6);
        nextState.push(8);
      }
    }
    state = nextState;
  }

  return state.length;
}

module.exports = findFishCount;
