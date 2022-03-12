/**
 * Srverless functions will be executed if you create
 * webhooks. Read more at:
 * https://crystallize.com/learn/developer-guides/webhooks
 */

async function created(event, context, callback) {
  const orderCreated = require("../../src/webhooks/order/created");

  try {
    await orderCreated(JSON.parse(event.body));
    callback(null, {
      statusCode: 200,
      body: "ok",
    });
  } catch (e) {
    console.log("Error at orderCreated webhook");
    console.log(e);

    callback(null, {
      statusCode: 500,
      body: "error",
    });
  }
}

async function updated(event, context, callback) {
  const orderUpdated = require("../../src/webhooks/order/updated");

  try {
    await orderUpdated(JSON.parse(event.body));
    callback(null, {
      statusCode: 200,
      body: "ok",
    });
  } catch (e) {
    console.log("Error at orderUpdated webhook");
    console.log(e);

    callback(null, {
      statusCode: 500,
      body: "error",
    });
  }
}

async function deleted(event, context, callback) {
  const orderDeleted = require("../../src/webhooks/order/deleted");

  try {
    await orderDeleted(JSON.parse(event.body));
    callback(null, {
      statusCode: 200,
      body: "ok",
    });
  } catch (e) {
    console.log("Error at orderDeleted webhook");
    console.log(e);

    callback(null, {
      statusCode: 500,
      body: "error",
    });
  }
}

async function pipelineRemoved(event, context, callback) {
  const orderPipelineRemoved = require("../../src/webhooks/order/pipeline-removed");

  try {
    await orderPipelineRemoved(JSON.parse(event.body));
    callback(null, {
      statusCode: 200,
      body: "ok",
    });
  } catch (e) {
    console.log("Error at orderPipelineRemoved webhook");
    console.log(e);

    callback(null, {
      statusCode: 500,
      body: "error",
    });
  }
}

async function pipelineStageChanged(event, context, callback) {
  const orderPipelineChanged = require("../../src/webhooks/order/pipeline-stage-changed");

  try {
    await orderPipelineChanged(JSON.parse(event.body));
    callback(null, {
      statusCode: 200,
      body: "ok",
    });
  } catch (e) {
    console.log("Error at orderPipelineChanged webhook");
    console.log(e);

    callback(null, {
      statusCode: 500,
      body: "error",
    });
  }
}

module.exports = {
  created,
  updated,
  deleted,
  pipelineRemoved,
  pipelineStageChanged,
};
