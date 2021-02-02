module.exports = {
  calculateVoucherDiscountAmount: function({voucher, total}) {
    // We assume that the voucher has the right format.
    // It either has `discountPercent` or `discountAmount`
    const isDiscountAmount = Boolean(voucher.discountAmount)

    if (isDiscountAmount) {
      return voucher.discountAmount;
    }

    return total * 100 / discountPercent;
  }
}