/**
 * Example of a voucher register
 * You can customise this to call an external service
 * or keep static vouchers like this
 */
const voucherRegister = [
  {
    code: "fair-deal",
    discountAmount: null,
    discountPercent: 5,
    onlyForAuthorisedUser: false,
  },
  {
    code: "awesome-deal-logged-in",
    discountAmount: null,
    discountPercent: 50,
    onlyForAuthorisedUser: true,
  },
  {
    code: "good-deal-logged-in",
    discountAmount: 500,
    discountPercent: null,
    onlyForAuthorisedUser: true,
  },
];

module.exports = {
  get({ code, context }) {
    const { user } = context;

    const isAnonymousUser = !user || !user.email;

    // As default, not all the vouchers work for anonymous users.
    // As you'll see in the configuration above, some need the user to be logged in
    if (isAnonymousUser) {
      const voucher = voucherRegister
        .filter((v) => !v.onlyForAuthorisedUser)
        .find((v) => v.code === code);

      return {
        isValid: Boolean(voucher),
        voucher,
      };
    }

    // We assume that none of the vouchers have repeated codes
    const voucher = voucherRegister.find((v) => v.code === code);

    return {
      isValid: Boolean(voucher),
      voucher,
    };
  },
};
