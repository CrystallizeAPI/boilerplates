/**
 * An example webhook for how to listen for Mollie order updates
 */

async function orderUpdate(event, context, callback) {
  try {
    const mollieOrder = JSON.parse(event.body);
    const mollieService = require("../../../src/services/payment-providers/mollie");

    await mollieService.orderUpdate({ mollieOrderId: mollieOrder.id });
  } catch (e) {
    console.log("Error at mollieOrderUpdate webhook");
    console.log(e);

    callback(null, {
      statusCode: 500,
      body: "error",
    });
  }
}

module.exports = {
  orderUpdate,
};
