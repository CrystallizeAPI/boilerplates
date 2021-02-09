"use strict";

const userService = require("../../src/services/user-service");

async function loginMagicLink(event, context, callback) {
  try {
    /**
     * Validatee the JWT token and extract the email
     * address and the redirectURLAfterLogin URL to send the
     * user to afterwards
     */
    const {
      success,
      signedLoginToken,
      redirectURLAfterLogin,
    } = await userService.validateMagicLinkToken(
      event.queryStringParameters.token
    );

    if (success) {
      return callback(null, {
        statusCode: 302,
        headers: {
          "set-cookie": `${userService.USER_TOKEN_NAME}=${signedLoginToken}; HttpOnly; Max-Age=86400; Path=/`,
          location: redirectURLAfterLogin,
        },
      });
    } else {
      return callback(null, {
        statusCode: 400,
        body: "User could not be authenticated authenticated",
      });
    }
  } catch (error) {
    console.log(error);

    return callback(null, {
      statusCode: 500,
      body: "Something went wrong when authenticating the token",
    });
  }
}

module.exports = {
  loginMagicLink,
};
