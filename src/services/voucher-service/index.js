/**
 * Example of a voucher register
 * You can customise this to call an external service
 * or keep static vouchers like this
 */

const vouchers = [
  {
    code: "awesome-deal",
    discountAmount: null,
    discountPercent: 99,
  },
  {
    code: "fair-deal",
    discountAmount: 300,
    discountPercent: null,
  },
];

const vouchersWithAuthenticationRequired = [
  {
    code: "awesome-deal-logged-in",
    discountAmount: null,
    discountPercent: 99,
  },
  {
    code: "fair-deal-logged-in",
    discountAmount: 500,
    discountPercent: null,
  },
];

module.exports = {
  get({ code, context }) {
    const { user } = context;
    if (!user.email) {
      return vouchers.find((v) => v.code === code);
    }
    
    // We assume that non of the vouchers have repeated codes
    const allVouchers = [...vouchers, ...vouchersWithAuthenticationRequired]
    const voucher = allVouchers.find((v) => v.code === code);

    // Lookup voucher in third party system
    // Todo: example

    return voucher;
  },
};
