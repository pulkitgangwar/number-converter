const decimalRegex = /^[0-9]{1,}(\.[0-9]{1,})?$/;

const convertDecimalToHexa = (decimal) => {
  if (!decimalRegex.test(decimal)) {
    throw new Error("This is not a decimal");
  } else {
    if (!decimal.toString().includes(".")) {
      let number = parseInt(decimal);
      let hexa = [];
      for (let i = 0; number > 0; i++) {
        let singleHexValue = number % 16;
        if (singleHexValue >= 10) {
          if (parseInt(singleHexValue) === 10) {
            singleHexValue = "A";
          } else if (parseInt(singleHexValue) === 11) {
            singleHexValue = "B";
          } else if (parseInt(singleHexValue) === 12) {
            singleHexValue = "C";
          } else if (parseInt(singleHexValue) === 13) {
            singleHexValue = "D";
          } else if (parseInt(singleHexValue) === 14) {
            singleHexValue = "E";
          } else if (parseInt(singleHexValue) === 15) {
            singleHexValue = "F";
          }
        }

        hexa.push(singleHexValue);
        number = Math.floor(number / 16);
      }

      return hexa.reverse().join("");
    } else {
      let num = parseFloat(`0.${decimal.toString().split(".")[1]}`);
      let hexaArray = [];
      const iterationCount = num.toString().split(".")[1].split("").length;

      for (let i = 0; i < iterationCount; i++) {
        if (!num.toString().includes(".")) {
          num = `${num}.0`;
        }

        if (parseFloat(num.toString().split(".")[0]) > 0) {
          num = `0.${num.toString().split(".")[1]}`;
        }
        let singleHexValue = Math.floor(num * 16);
        if (singleHexValue >= 10) {
          if (parseInt(singleHexValue) === 10) {
            singleHexValue = "A";
          } else if (parseInt(singleHexValue) === 11) {
            singleHexValue = "B";
          } else if (parseInt(singleHexValue) === 12) {
            singleHexValue = "C";
          } else if (parseInt(singleHexValue) === 13) {
            singleHexValue = "D";
          } else if (parseInt(singleHexValue) === 14) {
            singleHexValue = "E";
          } else if (parseInt(singleHexValue) === 15) {
            singleHexValue = "F";
          }
        }
        hexaArray.push(singleHexValue);
        num = num * 16;
      }
      const numberPartOne = convertDecimalToHexa(
        decimal.toString().split(".")[0]
      );
      const finalValue = `${numberPartOne}.${hexaArray.join("")}`;

      return finalValue;
    }
  }
};

module.exports = convertDecimalToHexa;
