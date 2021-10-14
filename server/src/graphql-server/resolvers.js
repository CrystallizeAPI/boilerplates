const crystallize = require("../services/crystallize");

const basketService = require("../services/basket-service");
const userService = require("../services/user-service");
const voucherService = require("../services/voucher-service");

const stripeService = require("../services/payment-providers/stripe");
const mollieService = require("../services/payment-providers/mollie");
const vippsService = require("../services/payment-providers/vipps");
const klarnaService = require("../services/payment-providers/klarna");
const paypalService = require("../services/payment-providers/paypal");
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
    myCustomBusinessThing: () => ({
      whatIsThis:
        "This is an example of a custom query for GraphQL demonstration purpuses. Check out the MyCustomBusinnessQueries resolvers for how to resolve additional fields apart from the 'whatIsThis' field",
    }),
    basket: (parent, args, context) => basketService.get({ ...args, context }),
    user: (parent, args, context) => userService.getUser({ context }),
    orders: () => ({}),
    subscriptions: () => ({}),
    paymentProviders: () => ({}),
    voucher: (parent, args, context) =>
      voucherService.get({ ...args, context }),
  },
  MyCustomBusinnessQueries: {
    dynamicRandomInt() {
      console.log("dynamicRandomInt called");
      return parseInt(Math.random() * 100);
    },
  },
  PaymentProvidersQueries: {
    stripe: paymentProviderResolver(stripeService),
    klarna: paymentProviderResolver(klarnaService),
    vipps: paymentProviderResolver(vippsService),
    mollie: paymentProviderResolver(mollieService),
    paypal: paymentProviderResolver(paypalService),
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
  SubscriptionQueries: {
    getByCustomer: (parent, args) =>
      crystallize.subscriptions.getByCustomer(args.customerIdentifier),
  },
  Mutation: {
    user: () => ({}),
    order: () => ({}),
    subscription: () => ({}),
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
  SubscriptionMutations: {
    delete: (parent, args) => crystallize.subscriptions.delete(args.id),
    updatePaymentMethod: (parent, args, context) =>
      crystallize.subscriptions.updatePaymentMethod({ ...args, context }),
  },
  PaymentProvidersMutations: {
    stripe: () => ({}),
    klarna: () => ({}),
    mollie: () => ({}),
    vipps: () => ({}),
    paypal: () => ({}),
    tillit: () => ({}),
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
  PaypalMutation: {
    createPayment: (parent, args, context) =>
      paypalService.createPaypalPayment({
        ...args,
        context,
        parent,
      }),
    confirmPayment: (parent, args, context) =>
      paypalService.confirmPaypalPayment({
        ...args,
        context,
        parent,
      }),
  },
  TillitMutation: {
    search: (_, args) => tillitService.search(args),
    checkout: (_, args, context) =>
      tillitService.checkout({ ...args, context }),
  },
};
