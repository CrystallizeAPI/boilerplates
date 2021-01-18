/**
 * Read more about how to talk to the Klarna API here:
 * https://developers.klarna.com/api/#introduction
 */

const invariant = require("invariant");
const { Klarna } = require("@crystallize/node-klarna");

const KLARNA_USERNAME = process.env.KLARNA_USERNAME;
const KLARNA_PASSWORD = process.env.KLARNA_PASSWORD;

let client;

module.exports = {
  getClient: () => {
    invariant(KLARNA_USERNAME, "KLARNA_USERNAME is not set");
    invariant(KLARNA_PASSWORD, "KLARNA_PASSWORD is not set");

    if (!client && KLARNA_USERNAME && KLARNA_PASSWORD) {
      client = new Klarna({
        username: KLARNA_USERNAME,
        password: KLARNA_PASSWORD,
        apiEndpoint: "api.playground.klarna.com",
      });
    }

    return client;
  },
};
