module.exports.parseMoveOrders = function (rawInput) {
  return rawInput.split("\n").map((moveOrder) => {
    const [position, step] = moveOrder.split(" ");
    return [position, Number(step)];
  });
};
