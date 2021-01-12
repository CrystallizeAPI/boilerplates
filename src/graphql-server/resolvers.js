const cartService = require("../services/cart-service");
const voucherService = require("../services/voucher-service");

const stripeService = require("../services/payment-providers/stripe");
const klarnaService = require("../services/payment-providers/klarna");
const vippsService = require("../services/payment-providers/vipps");
const mollieService = require("../services/payment-providers/mollie");
const userService = require("../services/user-service");

function paymentProviderResolver(service) {
  return () => ({
    enabled: service.enabled,
    config: service.frontendConfig,
  });
}

module.exports = {
  Query: {
    cart: (parent, args, context) => cartService.get(args, context.user),
    user: (parent, args, context) => context.user || {},
    vouchers: (parent, args, context) => ({}),
    paymentProviders: (parent, args, context) => ({}),
  },
  Mutation: {
    user: () => ({}),
  },
  UserQueries: {
    isLoggedIn(parent, args, context) {
      return Boolean(context.user && "email" in context.user);
    },
    logoutLink: (parent, args, { host }) => userService.getLogoutLink({ host }),
  },
  PaymentProvidersQueries: {
    stripe: paymentProviderResolver(stripeService),
    klarna: paymentProviderResolver(klarnaService),
    vipps: paymentProviderResolver(vippsService),
    mollie: paymentProviderResolver(mollieService),
  },
  VoucherQueries: {
    get: (parent, args, context) =>
      voucherService.get({ code: args.code, user: context.user }),
  },
  UserMutations: {
    sendMagicLink: async (parent, args, { userService, host }) => {
      return userService.sendMagicLink({ ...args, host });
    },
  },
};
