const basketService = require("../../basket-service");
const crystallize = require("../../crystallize");

const { getClient } = require("./utils");

module.exports = async function createPayment({
  checkoutModel,
  confirmationURL,
  user,
  serviceCallbackHost,
}) {
  const { basketModel, customer } = checkoutModel;

  const basket = await basketService.get({ basketModel, user });
  const { total } = basket;

  let { crystallizeOrderId } = basketModel;

  /* Use a Crystallize order and the fulfilment pipelines to
   * manage the lifecycle of the order
   */
  if (crystallizeOrderId) {
    await crystallize.orders.updateOrder(crystallizeOrderId, {
      ...basket,
      customer,
    });
  } else {
    const crystallizeOrder = await crystallize.orders.createOrder({
      ...basket,
      customer,
    });
    crystallizeOrderId = crystallizeOrder.id;
  }

  const mollieClient = await getClient();

  const mollieCustomer = await mollieClient.customers.create({
    name: `${customer.firstName} ${customer.lastName}`.trim() || "Jane Doe",
    email: customer.addresses[0].email,
  });

  const confirmation = new URL(
    confirmationURL.replace("{crystallizeOrderId}", crystallizeOrderId)
  );

  const mollieResponse = await mollieClient.payments.create({
    amount: {
      currency:
        process.env.MOLLIE_DEFAULT_CURRENCY || total.currency.toUpperCase(),
      value: `${total.gross.toFixed(2)}`,
    },
    customerId: mollieCustomer.id,
    sequenceType: "first",
    description: "Mollie test transaction",
    redirectUrl: confirmation.toString(),
    webhookUrl: `${serviceCallbackHost}/api/webhooks/payment-providers/mollie/order-update`,
    metadata: { crystallizeOrderId },
  });

  return {
    success: true,
    checkoutLink: mollieResponse._links.checkout.href,
    crystallizeOrderId,
  };
};
