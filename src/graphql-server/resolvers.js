const crystallize = require("../services/crystallize");

const basketService = require("../services/basket-service");
const userService = require("../services/user-service");
const voucherService = require("../services/voucher-service");

const stripeService = require("../services/payment-providers/stripe");
const mollieService = require("../services/payment-providers/mollie");
const vippsService = require("../services/payment-providers/vipps");
const klarnaService = require("../services/payment-providers/klarna");

function paymentProviderResolver(service) {
  return () => {
    return {
      enabled: service.enabled,
      config: service.frontendConfig,
    };
  };
}

module.exports = {
  Query: {
    myCustomBusinessThing: () => ({
      whatIsThis:
        "This is an example of a custom query for GraphQL demonstration purpuses. Check out the MyCustomBusinnessQueries resolvers for how to resolve additional fields apart from the 'whatIsThis' field",
    }),
    basket: (parent, args, context) => basketService.get({ ...args, context }),
    user: () => ({}),
    orders: () => ({}),
    paymentProviders: () => ({}),
    voucher: (parent, args, context) =>
      voucherService.get({ ...args, context }),
  },
  MyCustomBusinnessQueries: {
    dynamicRandomInt() {
      console.log("dynamicRandomInt called");
      return parseInt(Math.random() * 100);
    },
    youCanEvenGetTheUserDataHere: () => ({}),
  },
  UserQueries: {
    isLoggedIn(parent, args, { user }) {
      return Boolean(user && "email" in user);
    },
    email: (parent, args, { user }) => (user ? user.email : null),
    logoutLink: (parent, args, context) =>
      userService.getLogoutLink({ context }),
  },
  PaymentProvidersQueries: {
    stripe: paymentProviderResolver(stripeService),
    klarna: paymentProviderResolver(klarnaService),
    vipps: paymentProviderResolver(vippsService),
    mollie: paymentProviderResolver(mollieService),
  },
  OrderQueries: {
    get: (parent, args) => crystallize.orders.getOrder(args.id),
  },
  Mutation: {
    user: () => ({}),
    paymentProviders: () => ({}),
  },
  UserMutations: {
    sendMagicLink: (parent, args, context) => {
      return userService.sendMagicLink({ ...args, context });
    },
  },
  PaymentProvidersMutations: {
    stripe: () => ({}),
    klarna: () => ({}),
    mollie: () => ({}),
    vipps: () => ({}),
  },
  StripeMutations: {
    createPaymentIntent: (parent, args, context) =>
      stripeService.createPaymentIntent({ ...args, context }),
    confirmOrder: (parent, args, context) =>
      stripeService.confirmOrder({ ...args, context }),
  },
  KlarnaMutations: {
    renderCheckout: (parent, args, context) =>
      klarnaService.renderCheckout({
        ...args,
        context,
      }),
  },
  MollieMutations: {
    createPayment: (parent, args, context) =>
      mollieService.createPayment({
        ...args,
        context,
      }),
  },
  VippsMutations: {
    initiatePayment: (parent, args, context) =>
      vippsService.initiatePayment({
        ...args,
        context,
      }),
  },
};
