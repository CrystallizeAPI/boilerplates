module.exports = function orderDeleted(payload) {
  console.log("Webhook: orderDeleted");
  console.log(JSON.stringify(payload, null, 2));
};
