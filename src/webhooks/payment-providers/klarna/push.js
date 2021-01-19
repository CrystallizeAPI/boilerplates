const emailService = require("../../../services/email-service");
const { getClient } = require("../../../services/payment-providers/klarna");

module.exports = async function klarnaPush({
  crystallizeOrderId,
  klarnaOrderId,
}) {
  console.log("Klarna push webhook");
  console.log({ crystallizeOrderId, klarnaOrderId });

  const klarnaClient = await getClient();

  // Retrieve the Klarna order to get the payment status

  // Acknowledge the Klarna order
  await klarnaClient.ordermanagementV1.orders.acknowledge(klarnaOrderId);

  // Send out the confirmation email
  await emailService.sendOrderConfirmation(crystallizeOrderId);

  /**
   * You would typically also move the order in the
   * fulfilment pipeline from a stage called e.g.
   * "initial" to "created" here
   */
};
