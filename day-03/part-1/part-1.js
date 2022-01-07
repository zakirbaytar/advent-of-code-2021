function generatePowerConsumptionReport(binaryDiagnostics) {
  let gamma = "";
  let epsilon = "";

  for (let i = 0; i < binaryDiagnostics[0].length; i++) {
    let zeros = 0;
    let ones = 0;

    for (const binaryString of binaryDiagnostics) {
      if (binaryString[i] === "0") {
        zeros++;
      } else {
        ones++;
      }
    }

    gamma += zeros > ones ? "0" : "1";
    epsilon += zeros > ones ? "1" : "0";
  }

  return { gamma: parseInt(gamma, 2), epsilon: parseInt(epsilon, 2) };
}

module.exports = generatePowerConsumptionReport;
