const emailService = require("../../services/email-service");
const { orders, subscriptions } = require("../../services/crystallize");

module.exports = async function orderCreated(payload) {
  console.log("Webhook payload: orderCreated");
  console.log(JSON.stringify(payload, null, 2));

  const order = await orders.get(payload.id);

  console.log(JSON.stringify(order, null, 2));

  await emailService.sendOrderConfirmation(order);

  if (!order.meta.find((p) => p.key === "isFirstOrder")?.value === "1") {
    return;
  }

  await subscriptions.create(
    `/pricing-page/${order.cart[0].sku}`,
    order.customer.addresses[0].email,
    order.payment[0]
  );
};
