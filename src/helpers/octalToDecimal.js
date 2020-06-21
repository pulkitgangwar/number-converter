const octalRegex = /^[0-9]{1,}(\.[0-9]{1,})?$/;

const convertOctalToDecimal = (number) => {
  if (!octalRegex.test(number)) {
    throw new Error("This is not a octal number");
  } else {
    if (!number.toString().includes(".")) {
      const num = number.toString().split("").reverse();

      let total = 0;

      num.forEach((singleNumber, index) => {
        total += parseInt(singleNumber) * Math.pow(8, index);
      });

      return total;
    } else {
      const num = number.toString().split(".")[1].split("");
      let total = 0;
      num.forEach((singleNumber, index) => {
        total += parseInt(singleNumber) * Math.pow(8, -(index + 1));
      });
      const numberPartOne = convertOctalToDecimal(
        number.toString().split(".")[0]
      );
      const finalNumber = `${numberPartOne}.${total.toString().split(".")[1]}`;
      return finalNumber;
    }
  }
};

module.exports = convertOctalToDecimal;
