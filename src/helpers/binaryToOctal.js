const convertBinaryToDecimal = require("./binaryToDecimal");
const convertDecimalToOctal = require("./decimalToOctal");

const convertBinaryToOctal = (number) => {
  try {
    const decimal = convertBinaryToDecimal(number);
    const octalValue = convertDecimalToOctal(decimal);

    return octalValue;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = convertBinaryToOctal;
