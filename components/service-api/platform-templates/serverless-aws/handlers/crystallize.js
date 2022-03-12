"use strict";

/**
 * Proxying of the public tenant APIs
 * This is useful if you are protecting your APIs, read
 * more about that here:
 * https://crystallize.com/learn/developer-guides/api-overview/authentication
 *
 * In order to access protected API'sm you need to
 * attach additional headers to the request. You don't want
 * to do that in the frontend since the secret tokens can be
 * picked up by someone else
 */

const crystallize = require("../src/services/crystallize/utils");

async function catalogue(event, context, callback) {
  try {
    const r = await crystallize.callCatalogueApi(JSON.parse(event.body));

    return callback(null, {
      statuscode: 200,
      body: JSON.stringify(r),
    });
  } catch (error) {
    return callback(null, {
      statuscode: 500,
      body: JSON.stringify(error),
    });
  }
}

async function search(event, context, callback) {
  try {
    const r = await crystallize.callSearchApi(JSON.parse(event.body));

    return callback(null, {
      statuscode: 200,
      body: JSON.stringify(r),
    });
  } catch (error) {
    return callback(null, {
      statuscode: 500,
      body: JSON.stringify(error),
    });
  }
}

module.exports = {
  catalogue,
  search,
};
