module.exports = function orderCreated(payload) {
  console.log("Webhook payload: orderCreated");
  console.log(JSON.stringify(payload, null, 2));
};
