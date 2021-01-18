const crystallize = require("../../crystallize");
const basketService = require("../../basket-service");
const emailService = require("../../email-service");

const { getClient } = require("./utils");
const toCrystallizeOrderModel = require("./to-crystallize-order-model");

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY;

module.exports = {
  enabled: Boolean(STRIPE_SECRET_KEY && STRIPE_PUBLISHABLE_KEY),

  // The required frontend config
  frontendConfig: {
    publishableKey: STRIPE_PUBLISHABLE_KEY,
  },
  async createPaymentIntent({ basketModel, user }) {
    const basket = await basketService.get({ basketModel, user });

    const paymentIntent = await getClient().paymentIntents.create({
      amount: basket.total.gross * 100,
      currency: basket.total.currency,
    });

    return paymentIntent;
  },
  async confirmOrder({ paymentIntentId, checkoutModel, user }) {
    const { basketModel } = checkoutModel;

    const basket = await basketService.get({ basketModel, user });

    // Prepares a model valid for Crystallize order intake
    const crystallizeOrderModel = await toCrystallizeOrderModel({
      basket,
      checkoutModel,
      paymentIntentId,
    });

    /**
     * Record the order in Crystallize
     * Manage the order lifecycle by using the fulfilment pipelines:
     * https://crystallize.com/learn/user-guides/orders-and-fulfilment
     */
    const order = await crystallize.orders.createOrder(crystallizeOrderModel);

    // Send out email (can also be done in the orderCreated webhook)
    await emailService.sendOrderConfirmation(order.id);

    return {
      success: true,
      orderId: order.id,
    };
  },
};
