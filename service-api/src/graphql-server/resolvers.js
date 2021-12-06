const crystallize = require("../services/crystallize");

const basketService = require("../services/basket-service");
const userService = require("../services/user-service");

const stripeService = require("../services/payment-providers/stripe");
const tillitService = require("../services/payment-providers/tillit");

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
    basket: (parent, args, context) => basketService.get({ ...args, context }),
    user: (parent, args, context) => userService.getUser({ context }),
    orders: () => ({}),
    subscriptionContracts: () => ({}),
    paymentProviders: () => ({}),
  },
  PaymentProvidersQueries: {
    stripe: paymentProviderResolver(stripeService),
    tillit: () => ({}),
  },
  TillitPaymentProvider: {
    confirmation: (parent, args) => tillitService.confirmation(args.id),
  },
  OrderQueries: {
    get: (parent, args) => crystallize.orders.get(args.id),
    getByCustomer: (parent, args) =>
      crystallize.orders.getByCustomer(args.customerIdentifier),
  },
  SubscriptionContractQueries: {
    getByCustomer: (parent, args) =>
      crystallize.subscriptionContracts.getByCustomer(args.customerIdentifier),
  },
  Mutation: {
    user: () => ({}),
    order: () => ({}),
    subscriptionContracts: () => ({}),
    paymentProviders: () => ({}),
  },
  UserMutations: {
    sendMagicLink: (parent, args, context) =>
      userService.sendMagicLink({ ...args, context }),
    update: (parent, args, context) => userService.update({ ...args, context }),
    startSignUp: (parent, args) => userService.startSignUp(args),
  },
  OrderMutations: {
    delete: (parent, args) => crystallize.orders.delete(args.id),
  },
  SubscriptionContractMutations: {
    delete: (parent, args) => crystallize.subscriptionContracts.delete(args.id),
    updatePaymentMethod: (parent, args, context) =>
      crystallize.subscriptionContracts.updatePaymentMethod({
        ...args,
        context,
      }),
    change: (parent, args, context) =>
      crystallize.subscriptionContracts.change({ ...args, context }),
  },
  PaymentProvidersMutations: {
    stripe: () => ({}),
    tillit: () => ({}),
  },
  StripeMutations: {
    createPaymentIntent: (parent, args, context) =>
      stripeService.createPaymentIntent({ ...args, context }),
    confirmOrder: (parent, args, context) =>
      stripeService.confirmOrder({ ...args, context }),
  },
  TillitMutation: {
    search: (_, args) => tillitService.search(args),
    checkout: (_, args, context) =>
      tillitService.checkout({ ...args, context }),
  },
};
