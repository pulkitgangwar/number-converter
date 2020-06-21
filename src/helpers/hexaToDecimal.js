const hexaRegex = /^[0-9a-fA-F]{1,}(\.[0-9a-fA-F]{1,})?$/;

const convertHexaToDecimal = (number) => {
  if (!hexaRegex.test(number)) {
    throw new Error("This is not a hexadecimal number");
  } else {
    if (!number.toString().includes(".")) {
      const numberInArrayForm = number.toString().split("").reverse();

      let total = 0;

      numberInArrayForm.forEach((singleNumber, index) => {
        let storingNumberToChangeIt = singleNumber;
        if (
          storingNumberToChangeIt === "A" ||
          storingNumberToChangeIt === "a"
        ) {
          storingNumberToChangeIt = "10";
        } else if (
          storingNumberToChangeIt === "B" ||
          storingNumberToChangeIt === "b"
        ) {
          storingNumberToChangeIt = "11";
        } else if (
          storingNumberToChangeIt === "C" ||
          storingNumberToChangeIt === "c"
        ) {
          storingNumberToChangeIt = "12";
        } else if (
          storingNumberToChangeIt === "D" ||
          storingNumberToChangeIt === "d"
        ) {
          storingNumberToChangeIt = "13";
        } else if (
          storingNumberToChangeIt === "E" ||
          storingNumberToChangeIt === "e"
        ) {
          storingNumberToChangeIt = "14";
        } else if (
          storingNumberToChangeIt === "F" ||
          storingNumberToChangeIt === "f"
        ) {
          storingNumberToChangeIt = "15";
        }

        total += parseInt(storingNumberToChangeIt) * Math.pow(16, index);
      });

      return total;
    } else {
      const num = number.toString().split(".")[1].split("");
      let total = 0;
      num.forEach((singleNumber, index) => {
        let storingNumberToChangeIt = singleNumber;
        if (
          storingNumberToChangeIt === "A" ||
          storingNumberToChangeIt === "a"
        ) {
          storingNumberToChangeIt = "10";
        } else if (
          storingNumberToChangeIt === "B" ||
          storingNumberToChangeIt === "b"
        ) {
          storingNumberToChangeIt = "11";
        } else if (
          storingNumberToChangeIt === "C" ||
          storingNumberToChangeIt === "c"
        ) {
          storingNumberToChangeIt = "12";
        } else if (
          storingNumberToChangeIt === "D" ||
          storingNumberToChangeIt === "d"
        ) {
          storingNumberToChangeIt = "13";
        } else if (
          storingNumberToChangeIt === "E" ||
          storingNumberToChangeIt === "e"
        ) {
          storingNumberToChangeIt = "14";
        } else if (
          storingNumberToChangeIt === "F" ||
          storingNumberToChangeIt === "f"
        ) {
          storingNumberToChangeIt = "15";
        }
        total += parseInt(storingNumberToChangeIt) * Math.pow(16, -(index + 1));
      });
      const numberPartOne = convertHexaToDecimal(
        number.toString().split(".")[0]
      );
      const finalNumber = `${numberPartOne}.${total.toString().split(".")[1]}`;
      return finalNumber;
    }
  }
};

module.exports = convertHexaToDecimal;
