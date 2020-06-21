const binaryRegex = /^[0-1]{1,}(\.[0-1]{1,})?$/;

const convertToDecimal = (number) => {
  if (!binaryRegex.test(number.toString())) {
    throw new Error("This is not a binary number");
  } else {
    if (!number.toString().includes(".")) {
      const num = number.toString().split("").reverse();

      let total = 0;

      num.forEach((singleNumber, index) => {
        total += parseInt(singleNumber) * Math.pow(2, index);
      });

      return total;
    } else {
      const num = number.toString().split(".")[1].split("");
      let total = 0;
      num.forEach((singleNumber, index) => {
        total += parseInt(singleNumber) * Math.pow(2, -(index + 1));
      });
      const numberPartOne = convertToDecimal(number.toString().split(".")[0]);
      const finalNumber = `${numberPartOne}.${total.toString().split(".")[1]}`;
      return finalNumber;
    }
  }
};

module.exports = convertToDecimal;
