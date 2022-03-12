"use strict";

const userService = require("../../src/services/user-service");

async function loginMagicLink(event, context, callback) {
  try {
    /**
     * Validate the JWT token and extract the email
     * address and the redirectURLAfterLogin URL to send the
     * user to afterwards
     */
    const {
      success,
      signedLoginToken,
      signedLoginRefreshToken,
      redirectURLAfterLogin,
    } = await userService.validateMagicLinkToken(
      event.queryStringParameters.token
    );

    if (success) {
      /**
       * In order to get the login cookie to be sent for all
       * browsers, they need to share the top level domain.
       * See: https://web.dev/samesite-cookies-explained/
       * Example:
       * Website:         my-website.com
       * Service API: api.my-website.com
       */
      // "set-cookie": `${userService.COOKIE_USER_TOKEN_NAME}=${signedLoginToken}; HttpOnly; Max-Age=86400; Path=/ SameSite=None; Secure; Domain=.my-website.com`,

      return callback(null, {
        statusCode: 302,
        headers: {
          "set-cookie": [
            `${userService.COOKIE_USER_TOKEN_NAME}=${signedLoginToken}; HttpOnly; Max-Age=${userService.COOKIE_USER_TOKEN_MAX_AGE}; Path=/`,
            `${userService.COOKIE_REFRESH_TOKEN_NAME}=${signedLoginRefreshToken}; HttpOnly; Max-Age=${userService.COOKIE_REFRESH_TOKEN_MAX_AGE}; Path=/`,
          ],
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
