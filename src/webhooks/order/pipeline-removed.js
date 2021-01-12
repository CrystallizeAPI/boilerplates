module.exports = function orderPipelineRemoved(payload) {
  console.log("Webhook: orderPipelineRemoved");
  console.log(JSON.stringify(payload, null, 2));
};
