"use strict";

const userService = require("../../src/services/user-service");

function logout(event, context, callback) {
  return callback(null, {
    statusCode: 200,
    headers: {
      "content-type": "text/plain",
      "set-cookie": `${userService.COOKIE_USER_TOKEN_NAME}=deleted; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`,
    },
    body: "Logged out",
  });
}

module.exports = {
  logout,
};
