// const crystallize = require("../../crystallize");
const getOrder = require("./get-order");

module.exports = async function confirmation(id) {
  const tillitOrder = await getOrder(id);
  return tillitOrder;

  // Get Crystallize Order
  // if (tillitOrder.state !== "VERIFIED") return tillitOrder;

  // const email = tillitOrder?.buyer?.representative?.email;
  // const orders = await crystallize.orders.getByCustomer(email);
  // const order = orders.edges?.find(({ node: order }) => {
  //   const payment = order.payment?.[0];
  //   if (payment?.provider !== "custom") return false;
  //   const orderId = payment.properties?.find((p) => p.property === "orderId")
  //     ?.value;
  //   return orderId === id;
  // })?.node;
};
