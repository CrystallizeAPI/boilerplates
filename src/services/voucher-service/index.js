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
  get({ code, user }) {
    const voucher = vouchers.find((v) => v.code === code);

    // You can validate the code against the logged in user
    if (user.email === "no-voucher@for.me") {
      return null;
    }

    return voucher;
  },
};
