/**
 * The landing page for when users click the
 * magic link button in the email.
 * It validates the JWT token and extracts the email
 * address and the loggedInRedirect URL to send the
 * user to afterwards
 */

import userService from "../../../src/services/user-service";

export default async function loginMagicLink(req, res) {
  try {
    const {
      success,
      signedLoginToken,
      loggedInRedirect,
    } = await userService.validateMagicLinkToken(req.query.token);

    if (success) {
      res.setHeader(
        "Set-Cookie",
        `${userService.USER_SESSION_COOKIE_NAME}=${signedLoginToken}; HttpOnly; Max-Age=3600; Path=/`
      );
      res.setHeader("Location", loggedInRedirect);
      return res.status(302).send("User is authenticated");
    } else {
      return res.status(400).send("User could not be authenticated");
    }
  } catch (error) {
    console.log(error);

    res
      .status(500)
      .send("Somthing went wrong when trying to authenticated the user");
  }
}
