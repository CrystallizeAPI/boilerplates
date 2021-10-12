const emailService = require("../../services/email-service");
const { orders, subscriptions } = require("../../services/crystallize");

module.exports = async function orderCreated(payload) {
  console.log("Webhook payload: orderCreated");
  console.log(JSON.stringify(payload, null, 2));

  const order = await orders.get(payload.id);
  console.log(JSON.stringify(order, null, 2));
  await subscriptions.create(
    `/pricing-page/${order.cart[0].sku}`,
    order.customer.addresses[0].email,
    order.meta.find((p) => p.key === "stripePaymentMethodId")?.value
  );
  await emailService.sendOrderConfirmation(order);
};
