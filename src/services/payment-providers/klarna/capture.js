/**
 * An example of how to capture an amount for on an
 * order. You would typically do this as a response to
 * an update of a Fulfilment Pipelane Stage change in
 * Crystallize (https://crystallize.com/learn/developer-guides/order-api/fulfilment-pipelines)
 */

module.exports = async function klarnaCapture({ crystallizeOrderId }) {
  const crystallize = require("../../crystallize");
  const { getClient } = require("./utils");

  // Retrieve the Crystallize order
  const crystallizeOrder = await crystallize.orders.getOrder(
    crystallizeOrderId
  );
  const additionalInformation = JSON.parse(
    crystallizeOrder.additionalInformation
  );

  const klarnaClient = await getClient();

  // Capture the full amount for the order
  const {
    error,
    response,
  } = await klarnaClient.ordermanagementV1.captures.capture(
    additionalInformation.klarnaOrderId
  );

  console.log(error, response);

  /**
   * You would typically also move the order in the
   * fulfilment pipeline from a stage called e.g.
   * "created" to "purchased" here
   */
};
