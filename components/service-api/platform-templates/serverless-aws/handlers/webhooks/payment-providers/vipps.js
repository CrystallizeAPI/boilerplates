/**
 * Various endpoints needed to enable Vipps payments.
 * Read more about the required endpoints here:
 * https://www.vipps.no/developers-documentation/ecom/documentation/#callback-endpoints
 */

async function fallback(event, context, callback) {
  try {
    const vippsService = require("../../../src/services/payment-providers/vipps");

    const crystallizeOrderId = event.pathParameters.orderId;
    const onSuccessURL = decodeURIComponent(
      event.queryStringParameters.confirmation
    );
    const onErrorURL = decodeURIComponent(event.queryStringParameters.checkout);

    const { redirectTo } = await vippsService.fallback({
      crystallizeOrderId,
      onSuccessURL,
      onErrorURL,
    });

    callback(null, {
      statusCode: 307,
      headers: {
        location: redirectTo,
      },
    });
  } catch (e) {
    console.log("Error at vippsFallback webhook");
    console.log(e);

    callback(null, {
      statusCode: 500,
      body: "error",
    });
  }
}

async function orderUpdate(event, context, callback) {
  const crystallizeOrderId = event.pathParameters.orderId;

  try {
    const vippsService = require("../../../src/services/payment-providers/vipps");

    await vippsService.orderUpdate({ crystallizeOrderId });
  } catch (e) {
    console.log("Error at vippsOrderUpdate webhook");
    console.log(e);

    callback(null, {
      statusCode: 500,
      body: "error",
    });
  }
}

/**
 * Might be called by Vipps during checkout to retrieve the
 * shipping details if staticShippingDetails is not set.
 */
async function shipping(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({}),
  });
}

/**
 * Callback used for when the user asks to get their user details revoked
 * instance, it will not be retried.
 * https://www.vipps.no/developers-documentation/ecom/documentation/#callback-endpoints
 */
async function consentRemoval(event, context, callback) {
  // const userId = event.pathParameters.userId;

  callback(null, {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({}),
  });
}

module.exports = {
  fallback,
  orderUpdate,
  shipping,
  consentRemoval,
};
