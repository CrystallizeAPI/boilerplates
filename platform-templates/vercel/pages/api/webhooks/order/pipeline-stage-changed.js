import orderPipelineStageChanged from "../../../../src/webhooks/order/pipeline-stage-changed";

export default async function webhookOrderPipelineStageChanged(req, res) {
  try {
    await orderPipelineStageChanged(req.body);
    res.status(200).send("ok");
  } catch (e) {
    console.log("Error at orderPipelineStageChanged webhook");
    console.log(e);

    res.status(500).send("error");
  }
}
