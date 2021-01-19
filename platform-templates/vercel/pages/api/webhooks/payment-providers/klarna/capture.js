/**
 * An example webhook for how to do Klarna order capture
 * https://developers.klarna.com/api/#order-management-api-create-capture
 */

import klarnaCapture from "../../../../../src/webhooks/payment-providers/klarna/capture";

export default async function webhookKlarnaCapture(req, res) {
  try {
    await klarnaCapture({ crystallizeOrderId: req.query.crystallizeOrderId });
    res.status(200).send("ok");
  } catch (e) {
    console.log("Error at klarnaCapture webhook");
    console.log(e);

    res.status(500).send("error");
  }
}
