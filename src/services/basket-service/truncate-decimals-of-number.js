module.exports = {
  truncateDecimalsOfNumber: function (originalNumber, numberOfDecimals) {
    // toFixed() converts a number into a string by truncating it
    // with the number of decimals passed as parameter.
    const amountTruncated = originalNumber.toFixed(numberOfDecimals);
    // We use parseFloat() to return a transform the string into a number
    return parseFloat(amountTruncated);
  }
}