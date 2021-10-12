const crystallize = require("../../crystallize");
const getOrder = require("./get-order");

module.exports = async function confirmation(id) {
  const crystallizeOrder = await crystallize.orders.get(id);
  const payment = crystallizeOrder.payment[0];
  const orderId = payment.properties.find((p) => p.property === "orderId")
    .value;
  const tillitOrder = await getOrder(orderId);
  return tillitOrder;
};
