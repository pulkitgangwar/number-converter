// importing utils for this function
const convertHexaToDecimal = require("./hexaToDecimal");
const convertDecimalToBinary = require("./decimalToBinary");

const convertHexaToBinary = (hexaDecimal) => {
  try {
    const decimal = convertHexaToDecimal(hexaDecimal);
    const binary = convertDecimalToBinary(decimal);

    return binary;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = convertHexaToBinary;
