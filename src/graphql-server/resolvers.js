function getService(name) {
  const services = {
    crystallize: "../services/crystallize",
    basket: "../services/basket-service",
    user: "../services/user-service",
    stripe: "../services/payment-providers/stripe",
    klarna: "../services/payment-providers/klarna",
    vipps: "../services/payment-providers/vipps",
    mollie: "../services/payment-providers/mollie",
  };
  const service = services[name];
  if (!service) {
    throw new Error(`Service "${name}" is not defined`);
  }

  return require(service);
}

function paymentProviderResolver(serviceName) {
  return () => {
    const service = getService(serviceName);
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
    basket: (parent, args, context) =>
      getService("basket").get({ ...args, context }),
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
    logoutLink: (parent, args, context) =>
      getService("user").getLogoutLink({ context }),
  },
  PaymentProvidersQueries: {
    stripe: paymentProviderResolver("stripe"),
    klarna: paymentProviderResolver("klarna"),
    vipps: paymentProviderResolver("vipps"),
    mollie: paymentProviderResolver("mollie"),
  },
  OrderQueries: {
    get: (parent, args) => getService("crystallize").orders.getOrder(args.id),
  },
  Mutation: {
    user: () => ({}),
    paymentProviders: () => ({}),
  },
  UserMutations: {
    sendMagicLink: (parent, args, context) => {
      return getService("user").sendMagicLink({ ...args, context });
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
      getService("stripe").createPaymentIntent({ ...args, context }),
    confirmOrder: (parent, args, context) =>
      getService("stripe").confirmOrder({ ...args, context }),
  },
  KlarnaMutations: {
    renderCheckout: (parent, args, context) =>
      getService("klarna").renderCheckout({
        ...args,
        context,
      }),
  },
  MollieMutations: {
    createPayment: (parent, args, context) =>
      getService("mollie").createPayment({
        ...args,
        context,
      }),
  },
  VippsMutations: {
    initiatePayment: (parent, args, context) =>
      getService("vipps").initiatePayment({
        ...args,
        context,
      }),
  },
};
