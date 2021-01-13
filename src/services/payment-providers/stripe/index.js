const invariant = require("invariant");

const cartService = require("../../cart-service");
const { getClient } = require("./utils");
const toCrystallizeOrderModel = require("./to-crystallize-order-model");

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY;

module.exports = {
  enabled: Boolean(STRIPE_SECRET_KEY && STRIPE_PUBLISHABLE_KEY),
  frontendConfig: {
    publishableKey: STRIPE_PUBLISHABLE_KEY,
  },
  async createPaymentIntent({ cartModel, user }) {
    const cart = await cartService.get({ cartModel, user });

    const paymentIntent = await getClient().paymentIntents.create({
      amount: cart.total.gross * 100,
      currency: cart.total.currency,
    });

    return paymentIntent;
  },
  async confirmOrder({ paymentIntentId, cartModel, user }) {
    const cart = await cartService.get({ cartModel, user });

    const crystallizeOrderModel = toCrystallizeOrderModel({
      cart,
      paymentIntentId,
    });

    console.log(crystallizeOrderModel);
  },
};
