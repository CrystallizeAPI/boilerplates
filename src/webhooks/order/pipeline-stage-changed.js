module.exports = function orderPipelineStageChanged(payload) {
  console.log("Webhook: orderPipelineStageChanged");
  console.log(JSON.stringify(payload, null, 2));
};
