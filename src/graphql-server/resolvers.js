const crystallize = require("../services/crystallize");

const basketService = require("../services/basket-service");
const userService = require("../services/user-service");

const stripeService = require("../services/payment-providers/stripe");
const klarnaService = require("../services/payment-providers/klarna");
const vippsService = require("../services/payment-providers/vipps");
const mollieService = require("../services/payment-providers/mollie");

function paymentProviderResolver(service) {
  return () => ({
    enabled: service.enabled,
    config: service.frontendConfig,
  });
}

module.exports = {
  Query: {
    basket: (parent, args, { user }) => basketService.get({ ...args, user }),
    user: (parent, args, { user }) => user || {},
    orders: (parent, args, context) => ({}),
    paymentProviders: (parent, args, context) => ({}),
  },
  Mutation: {
    user: () => ({}),
    paymentProviders: () => ({}),
  },
  UserQueries: {
    isLoggedIn(parent, args, { user }) {
      return Boolean(user && "email" in user);
    },
    logoutLink: (parent, args, { publicHost }) =>
      userService.getLogoutLink({ publicHost }),
  },
  PaymentProvidersQueries: {
    stripe: paymentProviderResolver(stripeService),
    klarna: paymentProviderResolver(klarnaService),
    vipps: paymentProviderResolver(vippsService),
    mollie: paymentProviderResolver(mollieService),
  },
  OrderQueries: {
    get: (parent, args, { user }) => crystallize.orders.getOrder(args.id),
  },
  UserMutations: {
    sendMagicLink: (parent, args, { userService, publicHost }) => {
      return userService.sendMagicLink({ ...args, publicHost });
    },
  },
  PaymentProvidersMutations: {
    stripe: () => ({}),
    klarna: () => ({}),
  },
  StripeMutations: {
    createPaymentIntent: (parent, args, { user }) =>
      stripeService.createPaymentIntent({ ...args, user }),
    confirmOrder: (parent, args, { user }) =>
      stripeService.confirmOrder({ ...args, user }),
  },
  KlarnaMutations: {
    renderCheckout: (parent, args, { user, serviceCallbackHost }) =>
      klarnaService.renderCheckout({
        ...args,
        user,
        serviceCallbackHost,
      }),
  },
};
