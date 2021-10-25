const crystallize = require("../../services/crystallize");

module.exports = async function subscriptionRenewed(payload) {
  console.log("Webhook payload: subscriptionRenewed");
  console.log(JSON.stringify(payload, null, 2));

  const subscription = await crystallize.subscriptions.get(payload.id);

  // console.log(JSON.stringify(subscription, null, 2));

  const customer = await crystallize.customers.get({
    identifier: subscription.customerIdentifier,
  });
  const product = await crystallize.products.getByPath(
    `/pricing-page/${subscription.item.sku}`
  );
  const payment = subscription.payment;
  const item = subscription.item;

  console.log("Charge");
  const charge = await crystallize.utils.createCharge({
    payment,
    item,
    customer,
    totalValue: subscription.status.price,
    currency: subscription.status.currency,
  });

  const orderInput = crystallize.utils.createOrderInput({
    customer,
    payment,
    charge,
    product,
  });

  console.log("Create Crystallize Order");
  await crystallize.orders.create(orderInput);
};
