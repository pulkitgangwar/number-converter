const decimalRegex = /^[0-9]{1,}(\.[0-9]{1,})?$/;

const convertDecimalToBinary = (decimal) => {
  if (!decimalRegex.test(decimal)) {
    throw new Error("This is not a decimal");
  } else {
    if (!decimal.toString().includes(".")) {
      let number = parseInt(decimal);
      let binaryNumber = [];
      for (let i = 0; number > 0; i++) {
        binaryNumber.push(number % 2);
        number = Math.floor(number / 2);
      }

      return binaryNumber.reverse().join("");
    } else {
      let num = parseFloat(`0.${decimal.toString().split(".")[1]}`);
      let binaryArray = [];
      for (let i = 0; i <= 3; i++) {
        if (parseInt(num.toString().split(".")[0]) === 1) {
          num = `0.${num.toString().split(".")[1]}`;
        }
        binaryArray.push(Math.floor(num * 2));
        num = num * 2;
      }
      const numberPartOne = convertDecimalToBinary(
        decimal.toString().split(".")[0]
      );
      const finalValue = `${numberPartOne}.${binaryArray.join("")}`;

      return finalValue;
    }
  }
};

module.exports = convertDecimalToBinary;
