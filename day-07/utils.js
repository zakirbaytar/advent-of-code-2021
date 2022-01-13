module.exports.parseInput = function (rawInput) {
  return rawInput.split(",").map(Number);
};

/**
 * @param {number[]} array
 */
module.exports.findMax = function (numbers) {
  let maxNumber = numbers[0];
  for (const number of numbers) {
    if (number > maxNumber) {
      maxNumber = number;
    }
  }

  return maxNumber;
};

/**
 * @param {number[]} array
 */
module.exports.findMin = function (numbers) {
  let minNumber = numbers[0];
  for (const number of numbers) {
    if (number < minNumber) {
      minNumber = number;
    }
  }

  return minNumber;
};
