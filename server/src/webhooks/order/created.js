const emailService = require("../../services/email-service");
const crystallize = require("../../services/crystallize");

module.exports = async function orderCreated(payload) {
  console.log("Webhook payload: orderCreated");
  console.log(JSON.stringify(payload, null, 2));

  const order = await crystallize.orders.get(payload.id);

  // console.log(JSON.stringify(order, null, 2));

  await emailService.sendOrderConfirmation(order);

  if (order.meta?.find((p) => p.key === "isFirstOrder")?.value !== "1") {
    return;
  }

  const product = await crystallize.products.getByPath(
    `/pricing-page/${order.cart[0].sku}`
  );

  const input = crystallize.subscriptions.utils.createSubscriptionContractInput(
    {
      customerIdentifier: order.customer.addresses[0].email,
      product,
      paymentInput: crystallize.utils.paymentToPaymentInput(order.payment[0]),
    }
  );

  console.log("Create Subscription");
  await crystallize.subscriptions.create(input);
};
