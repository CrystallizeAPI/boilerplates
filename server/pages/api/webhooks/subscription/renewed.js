/**
 * This serverless function will be executed if you create
 * a webhook for this endpoint. Read more at:
 * https://crystallize.com/learn/developer-guides/webhooks
 */

import subscriptionRenewed from "../../../../src/webhooks/subscription/renewed";

export default async function webhookSubscriptionRenewed(req, res) {
  try {
    await subscriptionRenewed(req.body);
    res.status(200).send("ok");
  } catch (e) {
    console.log("Error at subscriptionRenewed webhook");
    console.log(e);

    res.status(500).send("error");
  }
}
