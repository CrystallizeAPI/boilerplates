module.exports = async function confirmOrder({
  paymentIntentId,
  checkoutModel,
  context,
}) {
  const crystallize = require("../../crystallize");
  const emailService = require("../../email-service");
  const basketService = require("../../basket-service");

  const toCrystallizeOrderModel = require("./to-crystallize-order-model");

  const { basketModel } = checkoutModel;

  const basket = await basketService.get({ basketModel, context });

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

  // Wait for the order to be persisted
  await crystallize.orders.waitForOrderToBePersistated({ id: order.id });

  /**
   * Send out the order confirmation email to the customer
   * It can also be done in a webhook, example here:
   * - webhooks/order/created
   */
  await emailService.sendOrderConfirmation(order.id);

  return {
    success: true,
    orderId: order.id,
  };
};
