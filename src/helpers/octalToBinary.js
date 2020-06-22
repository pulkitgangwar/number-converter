const convertOctalToDecimal = require("./octalToDecimal");
const convertDecimalToBinary = require("./decimalToBinary");

const convertOctalToBinary = (number) => {
  try {
    const decimal = convertOctalToDecimal(number);
    const binary = convertDecimalToBinary(decimal);

    return binary;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = convertOctalToBinary;
