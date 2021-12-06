const crystallize = require("../../services/crystallize");

module.exports = async function subscriptionRenewed(payload) {
  console.log("Webhook payload: subscriptionRenewed");
  console.log(JSON.stringify(payload, null, 2));

  const subscriptionContract = await crystallize.subscriptionRenewed.get(
    payload.id
  );

  // console.log(JSON.stringify(subscription, null, 2));

  const customer = await crystallize.customers.get({
    identifier: subscriptionContract.customerIdentifier,
  });
  const product = await crystallize.products.getByPath(
    `/plans/${subscriptionContract.item.sku}`
  );
  const payment = subscriptionContract.payment;
  const item = subscriptionContract.item;

  console.log("Charge");
  const charge = await crystallize.utils.createCharge({
    payment,
    item,
    customer,
    totalValue: subscriptionContract.status.price,
    currency: subscriptionContract.status.currency,
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
