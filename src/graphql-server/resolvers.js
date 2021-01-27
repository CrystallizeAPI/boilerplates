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
    myCustomBusinessThing: () => ({
      whatIsThis:
        "This is an example of a custom query for GraphQL demonstration purpuses. Check out the MyCustomBusinnessQueries resolvers for how to resolve additional fields apart from the 'whatIsThis' field",
    }),
    basket: (parent, args, { user }) => basketService.get({ ...args, user }),
    user: () => ({}),
    orders: () => ({}),
    paymentProviders: () => ({}),
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
    get: (parent, args) => crystallize.orders.getOrder(args.id),
  },
  Mutation: {
    user: () => ({}),
    paymentProviders: () => ({}),
  },
  UserMutations: {
    sendMagicLink: (parent, args, { userService, publicHost }) => {
      return userService.sendMagicLink({ ...args, publicHost });
    },
  },
  PaymentProvidersMutations: {
    stripe: () => ({}),
    klarna: () => ({}),
    mollie: () => ({}),
    vipps: () => ({}),
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
  MollieMutations: {
    createPayment: (parent, args, { user, serviceCallbackHost }) =>
      mollieService.createPayment({
        ...args,
        user,
        serviceCallbackHost,
      }),
  },
  VippsMutations: {
    initiatePayment: (parent, args, { user, serviceCallbackHost }) =>
      vippsService.initiatePayment({
        ...args,
        user,
        serviceCallbackHost,
      }),
  },
};
