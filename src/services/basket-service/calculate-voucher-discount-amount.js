const {truncateDecimalsOfNumber} = require('./truncate-decimals-of-number')

const NUMBER_OF_DECIMALS_DESIRED = 2

module.exports = {
  calculateVoucherDiscountAmount: function({voucher, amount}) {
    // We assume that the voucher has the right format.
    // It either has `discountPercent` or `discountAmount`
    const isDiscountAmount = Boolean(voucher.discountAmount)

    if (isDiscountAmount) {
      return voucher.discountAmount;
    }

    const amountToDiscount = amount * voucher.discountPercent / 100;
    return truncateDecimalsOfNumber(amountToDiscount, NUMBER_OF_DECIMALS_DESIRED);
  }
}