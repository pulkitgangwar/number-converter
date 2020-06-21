const decimalRegex = /^[0-9]{1,}(\.[0-9]{1,})?$/;

const convertDecimalToOctal = (decimal) => {
  if (!decimalRegex.test(decimal)) {
    throw new Error("This is not a decimal number");
  } else {
    if (!decimal.toString().includes(".")) {
      let number = parseInt(decimal);
      let octalNumber = [];
      for (let i = 0; number > 0; i++) {
        octalNumber.push(number % 8);
        number = Math.floor(number / 8);
      }

      return octalNumber.reverse().join("");
    } else {
      let num = parseFloat(`0.${decimal.toString().split(".")[1]}`);
      let binaryArray = [];
      for (let i = 0; i <= 3; i++) {
        if (!num.toString().includes(".")) {
          num = `${num}.00`;
        }
        if (parseInt(num.toString().split(".")[0]) > 0) {
          num = `0.${num.toString().split(".")[1]}`;
        }
        binaryArray.push(Math.floor(num * 8));
        num = num * 8;
      }
      const numberPartOne = convertDecimalToOctal(
        decimal.toString().split(".")[0]
      );
      const finalValue = `${numberPartOne}.${binaryArray.join("")}`;

      return finalValue;
    }
  }
};

module.exports = convertDecimalToOctal;
