module.exports = function orderPipelineStageChanged(payload) {
  console.log("Webhook: orderPipelineStageChanged");
  console.log(JSON.stringify(payload, null, 2));

  const {
    order: { get: order },
  } = payload;

  console.log("Order pipeline update for", order.id);
  console.log("The order is in", order.pipelines.length, "pipeline(s)");

  // Print out the different pipelines and their stage names
  const inPipelines = order.pipelines.map(({ pipeline, stageId }) => {
    const { name } = pipeline;
    const stageName = pipeline.stages?.find((s) => s.id === stageId)?.name;

    console.log(`Pipeline "${name}" is in stage "${stageName}"`);

    return {
      name,
      stageName,
    };
  });

  // Example of a "In store" order pipeline
  const inStorePipeline = inStages.find((p) => p.name === "In store pickup");
  if (inStorePipeline) {
    switch (inStorePipeline.stageName) {
      case "New":
        console.log("Notify staff of new order");
        break;
      case "Packing":
        console.log("Inform the user: packing begun");
        break;
      case "Ready":
        console.log("Inform the user: ready for pickup");
        break;
      case "Delivered":
        console.log("Capture order amount from payment provider");
        break;
      case "Cancelled":
        console.log("Refund order amount from payment provider");
        break;
    }
  }
};
