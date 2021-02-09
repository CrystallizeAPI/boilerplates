module.exports = async function createMolliePayment({
  checkoutModel,
  context,
}) {
  const basketService = require("../../basket-service");
  const crystallize = require("../../crystallize");

  const { getClient } = require("./utils");

  const { basketModel, customer, confirmationURL } = checkoutModel;
  const { serviceCallbackHost } = context;

  const basket = await basketService.get({ basketModel, context });
  const { total } = basket;

  let { crystallizeOrderId } = basketModel;

  const isSubscription = false;

  /* Use a Crystallize order and the fulfilment pipelines to
   * manage the lifecycle of the order
   */
  if (crystallizeOrderId) {
    await crystallize.orders.updateOrder(crystallizeOrderId, {
      ...basket,
      customer,
      additionalInformation: JSON.stringify({
        isSubscription,
      }),
    });
  } else {
    const crystallizeOrder = await crystallize.orders.createOrder({
      ...basket,
      customer,
      additionalInformation: JSON.stringify({
        isSubscription,
      }),
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

  const validMollieOrder = {
    amount: {
      currency:
        process.env.MOLLIE_DEFAULT_CURRENCY || total.currency.toUpperCase(),
      value: total.gross.toFixed(2),
    },
    customerId: mollieCustomer.id,
    sequenceType: "first",
    description: "Mollie test transaction",
    redirectUrl: confirmation.toString(),
    webhookUrl: `${serviceCallbackHost}/webhooks/payment-providers/mollie/order-update`,
    metadata: { crystallizeOrderId },
  };

  const mollieOrderResponse = await mollieClient.payments.create(
    validMollieOrder
  );

  if (isSubscription) {
    await mollieClient.customers_mandates.get(mollieOrderResponse.mandateId, {
      customerId: mollieCustomer.id,
    });

    // Define the start date for the subscription
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 15);
    startDate.toISOString().split("T")[0];

    await mollieClient.customers_subscriptions.create({
      customerId: mollieCustomer.id,
      amount: validMollieOrder.amount,
      times: 1,
      interval: "1 month",
      startDate,
      description: "Mollie Test subscription",
      webhookUrl: `${serviceCallbackHost}/webhooks/payment-providers/mollie/subscription-renewal`,
      metadata: {},
    });
  }

  return {
    success: true,
    checkoutLink: mollieOrderResponse._links.checkout.href,
    crystallizeOrderId,
  };
};
