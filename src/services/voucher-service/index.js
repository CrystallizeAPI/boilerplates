/**
 * Example of a voucher register
 * You can customise this to call an external service
 * or keep static vouchers like this
 */
const {VOUCHERS_CONFIG} = require('./config')

module.exports = {
  get({ code, context }) {
    const { user } = context;
    
    const isAnonymousUser = !user || !user.email
    
    // As default, not all the vouchers work for anonymous users.
    // As you'll see in the configuration above, some need the user to be logged in
    if (isAnonymousUser) {
      const voucher = VOUCHERS_CONFIG.DOES_NOT_REQUIRE_AUTH
        .find((v) => v.code === code);
        
      return {
        isValid: Boolean(voucher),
        voucher
      }
    }
    
    // We assume that non of the vouchers have repeated codes
    const allVouchers = [
      ...VOUCHERS_CONFIG.DOES_NOT_REQUIRE_AUTH,
      ...VOUCHERS_CONFIG.REQUIRES_AUTH,
    ]
    const voucher = allVouchers.find((v) => v.code === code);

    // Lookup voucher in third party system
    // Todo: example

    return {
      isValid: Boolean(voucher),
      voucher
    }
  },
};
