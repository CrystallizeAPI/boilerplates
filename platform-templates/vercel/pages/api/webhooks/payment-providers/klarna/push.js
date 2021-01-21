/**
 * This serverless function will be executed on every Klarna
 * order update. Read more at:
 * https://developers.klarna.com/documentation/klarna-checkout/in-depth/confirm-purchase/
 */

import klarnaPush from "../../../../../src/services/payment-providers/klarna/push";

export default async function webhookKlarnaPush(req, res) {
  try {
    console.log("webhookKlarnaPush", req.query);
    await klarnaPush({
      crystallizeOrderId: req.query.crystallizeOrderId,
      klarnaOrderId: req.query.klarnaOrderId,
    });
    res.status(200).send("ok");
  } catch (e) {
    console.log("Error at klarnaPush webhook");
    console.log(e);

    res.status(500).send("error");
  }
}
