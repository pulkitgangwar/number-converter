// importing utils for this function
const convertBinaryToDecimal = require("./binaryToDecimal");
const convertDecimalToHexa = require("./decimalToHexa");

const convertBinaryToHexa = (binary) => {
  try {
    const decimal = convertBinaryToDecimal(binary);
    console.log(decimal, "decimal");
    const hexaDecimal = convertDecimalToHexa(decimal);
    console.log(hexaDecimal, "hexadecimal");
    return hexaDecimal;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = convertBinaryToHexa;
