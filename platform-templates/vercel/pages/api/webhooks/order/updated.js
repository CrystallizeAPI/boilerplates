import orderUpdated from "../../../../src/webhooks/order/updated";

export default async function webhookOrderUpdated(req, res) {
  try {
    await orderUpdated(req.body);
    res.status(200).send("ok");
  } catch (e) {
    console.log("Error at orderUpdated webhook");
    console.log(e);

    res.status(500).send("error");
  }
}
