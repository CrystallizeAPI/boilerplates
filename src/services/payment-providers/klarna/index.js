const KLARNA_USERNAME = process.env.KLARNA_USERNAME;
const KLARNA_PASSWORD = process.env.KLARNA_PASSWORD;

const crystallize = require("../../crystallize");
const basketService = require("../../basket-service");

const { getClient } = require("./utils");
const toKlarnaOrderModel = require("./to-klarna-order-model");

module.exports = {
  enabled: Boolean(KLARNA_USERNAME && KLARNA_PASSWORD),
  frontendConfig: {},

  renderCheckout: async ({
    checkoutModel,
    confirmationURL,
    termsURL,
    checkoutURL,
    user,
    host,
  }) => {
    const { basketModel, customer } = checkoutModel;

    let { crystallizeOrderId, klarnaOrderId } = basketModel;

    const basket = await basketService.get({ basketModel, user });

    /**
     * Use a Crystallize order and the fulfilment pipelines to
     * manage the lifecycle of the order
     */
    if (crystallizeOrderId) {
      await crystallize.orders.updateOrder({
        id: crystallizeOrderId,
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

    // Setup the confirmation URL
    let confirmation = new URL(
      confirmationURL.replace("{crystallizeOrderId}", crystallizeOrderId)
    );
    confirmation.searchParams.append("klarnaOrderId", "{checkout.order.id}");

    const validKlarnaOrderModel = {
      ...toKlarnaOrderModel(basket),
      purchase_country: "NO",
      purchase_currency: basket.total.currency || "NOK",
      locale: "no-nb",
      merchant_urls: {
        terms: termsURL,
        checkout: checkoutURL,
        confirmation: confirmation.toString(),
        push: `${host}/api/webhooks/klarna/push?crystallizeOrderId=${crystallizeOrderId}&klarnaOrderId={checkout.order.id}`,
      },
    };

    const klarnaClient = await getClient();

    let html = "";

    /**
     * There is already a Klarna order id for this user
     * session, let's use that and not create a new one
     */
    if (klarnaOrderId) {
      const { error, response } = await klarnaClient.checkoutV3.updateOrder(
        klarnaOrderId,
        validKlarnaOrderModel
      );

      if (!error) {
        html = response.html_snippet;
        klarnaOrderId = response.order_id;
      } else {
        throw new Error(error);
      }
    } else {
      const { error, response } = await klarnaClient.checkoutV3.createOrder(
        validKlarnaOrderModel
      );

      if (!error) {
        html = response.html_snippet;
        klarnaOrderId = response.order_id;
      } else {
        throw new Error(error);
      }
    }

    // Tag the Crystallize order with the Klarna order id
    await crystallize.orders.updateOrder({
      id: crystallizeOrderId,
      ...basket,
      additionalInformation: JSON.stringify({
        klarnaOrderId,
        klarnaStatus: "not-completed",
      }),
    });

    return {
      html,
      klarnaOrderId,
      crystallizeOrderId,
    };
  },
};
