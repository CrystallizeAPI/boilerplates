// const emailService = require("../../services/email-service");

module.exports = async function orderCreated(payload) {
  console.log("Webhook payload: orderCreated");
  console.log(JSON.stringify(payload, null, 2));

  /**
   * You can send out an order confirmation email here
   * if you like. The email sending is also triggered at:
   * - payment-providers/stripe
   *
   * You should settle on a single place to to this
   */
  // await emailService.sendOrderConfirmation(payload.order.data.id);
};
