/**
 * The landing page for when users click the
 * magic link button in the email.
 */

import userService from "../../../src/services/user-service";

export default async function loginMagicLink(req, res) {
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
    } = await userService.validateMagicLinkToken(req.query.token);

    if (success) {
      res.setHeader(
        "Set-Cookie",
        `${userService.USER_TOKEN_NAME}=${signedLoginToken}; HttpOnly; Max-Age=86400; Path=/`
      );
      res.setHeader("Location", redirectURLAfterLogin);

      return res.status(302).send("User is authenticated");
    } else {
      return res.status(400).send("User could not be authenticated");
    }
  } catch (error) {
    console.log(error);

    res
      .status(500)
      .send("Something went wrong when trying to authenticated the user");
  }
}
