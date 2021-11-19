const emailService = require("../../services/email-service");
const handleFBAFulfilment = require("./fulfilment-fba")

module.exports = async function orderCreated(payload) {
  console.log("Webhook payload: orderCreated");
  console.log(JSON.stringify(payload, null, 2));

  const fbaResponse = await handleFBAFulfilment(payload)
  console.log("FBA Response", JSON.stringify(fbaResponse, null, 2))
  /**
   * You can send out an order confirmation email here
   * if you like
   */
  await emailService.sendOrderConfirmation(payload.order.data.id);

  return fbaResponse
};
