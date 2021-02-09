/**
 * The 'push' serverless function will be executed on every Klarna
 * order update. Read more at:
 * https://developers.klarna.com/documentation/klarna-checkout/in-depth/confirm-purchase/
 */

async function push(event, context, callback) {
  try {
    const klarnaService = require("../../../src/services/payment-providers/klarna");

    console.log("webhookKlarnaPush", event.queryStringParameters);
    await klarnaService.push({
      crystallizeOrderId: event.queryStringParameters.crystallizeOrderId,
      klarnaOrderId: event.queryStringParameters.klarnaOrderId,
    });

    callback(null, {
      statusCode: 200,
      body: "ok",
    });
  } catch (e) {
    console.log("Error at klarnaPush webhook");
    console.log(e);

    callback(null, {
      statusCode: 500,
      body: "error",
    });
  }
}

/**
 * An example webhook for how to do Klarna order capture
 * https://developers.klarna.com/api/#order-management-api-create-capture
 */
async function capture(event, context, callback) {
  try {
    const klarnaService = require("../../../src/services/payment-providers/klarna");

    console.log(
      "webhookKlarnaCapture",
      event.queryStringParameters.crystallizeOrderId
    );
    await klarnaService.capture({
      crystallizeOrderId: event.queryStringParameters.crystallizeOrderId,
    });

    callback(null, {
      statusCode: 200,
      body: "ok",
    });
  } catch (e) {
    console.log("Error at klarnaCapture webhook");
    console.log(e);

    callback(null, {
      statusCode: 500,
      body: "error",
    });
  }
}

module.exports = {
  push,
  capture,
};
