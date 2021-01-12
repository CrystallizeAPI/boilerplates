module.exports = function orderCreated(payload) {
  console.log("Webhook: orderCreated");
  console.log(JSON.stringify(payload, null, 2));
};
