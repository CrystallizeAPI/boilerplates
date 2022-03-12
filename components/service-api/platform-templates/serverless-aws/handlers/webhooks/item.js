/**
 * Srverless functions will be executed if you create
 * webhooks. Read more at:
 * https://crystallize.com/learn/developer-guides/webhooks
 */

async function created(event, context, callback) {
  const itemCreated = require("../../src/webhooks/item/created");

  try {
    await itemCreated(JSON.parse(event.body));
    callback(null, {
      statusCode: 200,
      body: "ok",
    });
  } catch (e) {
    console.log("Error at itemCreated webhook");
    console.log(e);

    callback(null, {
      statusCode: 500,
      body: "error",
    });
  }
}

async function updated(event, context, callback) {
  const itemUpdated = require("../../src/webhooks/item/updated");

  try {
    await itemUpdated(JSON.parse(event.body));
    callback(null, {
      statusCode: 200,
      body: "ok",
    });
  } catch (e) {
    console.log("Error at itemUpdated webhook");
    console.log(e);

    callback(null, {
      statusCode: 500,
      body: "error",
    });
  }
}

async function deleted(event, context, callback) {
  const itemDeleted = require("../../src/webhooks/item/deleted");

  try {
    await itemDeleted(JSON.parse(event.body));
    callback(null, {
      statusCode: 200,
      body: "ok",
    });
  } catch (e) {
    console.log("Error at itemDeleted webhook");
    console.log(e);

    callback(null, {
      statusCode: 500,
      body: "error",
    });
  }
}

async function published(event, context, callback) {
  const itemPublished = require("../../src/webhooks/item/published");

  try {
    await itemPublished(JSON.parse(event.body));
    callback(null, {
      statusCode: 200,
      body: "ok",
    });
  } catch (e) {
    console.log("Error at itemPublished webhook");
    console.log(e);

    callback(null, {
      statusCode: 500,
      body: "error",
    });
  }
}

async function unpublished(event, context, callback) {
  const itemUnpublished = require("../../src/webhooks/item/unpublished");

  try {
    await itemUnpublished(JSON.parse(event.body));
    callback(null, {
      statusCode: 200,
      body: "ok",
    });
  } catch (e) {
    console.log("Error at itemUnpublished webhook");
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
  published,
  unpublished,
};
