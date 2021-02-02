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

module.exports = {
  get({ code, context }) {
    const { user } = context;
    const voucher = vouchers.find((v) => v.code === code);

    // Only vouchers for logged in users
    if (!user.email) {
      return null;
    }

    // Lookup voucher in third party system
    // Todo: example

    return voucher;
  },
};
