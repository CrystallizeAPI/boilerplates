const invariant = require("invariant");

/**
 * Todo: link to good JWT intro
 */
const JWT_SECRET = process.env.JWT_SECRET;

// The cookie name to use for JTW token
const USER_TOKEN_NAME = "user-token";

module.exports = {
  USER_TOKEN_NAME,
  getLogoutLink({ context }) {
    const { publicHost } = context;

    return `${publicHost}/user/logout`;
  },
  authenticate(token) {
    invariant(JWT_SECRET, "process.env.JWT_SECRET is not defined");

    if (!token) {
      return null;
    }

    /**
     * Here you would confirm the token provided by the cookie is a valid token
     * for a user. The boilerplate has no datastore or service to persist users,
     * so we will assume that the token is valid.
     */
    const jwt = require("jsonwebtoken");
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded) {
      return null;
    }

    return {
      email: decoded.email,
    };
  },
  async sendMagicLink({ email, redirectURLAfterLogin, context }) {
    invariant(JWT_SECRET, "process.env.JWT_SECRET is not defined");

    const { publicHost } = context;

    /**
     * This is the page responsible of receiving the magic
     * link token, and then calling the validateMagicLinkToken
     * function from userService.
     */
    const loginLink = new URL(`${publicHost}/user/login-magic-link`);

    /**
     * Add the JWT to the callback url
     * When the link is visited, we can validate the token
     * again in the validateMagicLinkToken method
     */
    const jwt = require("jsonwebtoken");
    loginLink.searchParams.append(
      "token",
      jwt.sign({ email, redirectURLAfterLogin }, JWT_SECRET, {
        expiresIn: "36000s",
      })
    );

    const emailService = require("../email-service");

    const { success } = await emailService.sendUserMagicLink({
      loginLink: loginLink.toString(),
      email,
    });

    return { success };
  },
  validateMagicLinkToken(token) {
    invariant(JWT_SECRET, "process.env.JWT_SECRET is not defined");

    /**
     * Here we would want to fetch an entry matching the provided token from our
     * datastore. This boilerplate does not have a datastore connected to it yet
     * so we will just assume the token is for a real user and sign a login token
     * accordingly.
     */

    try {
      const jwt = require("jsonwebtoken");
      const decoded = jwt.verify(token, JWT_SECRET);
      const { email, redirectURLAfterLogin } = decoded;

      const signedLoginToken = jwt.sign({ email }, JWT_SECRET, {
        expiresIn: "24h",
      });

      return {
        success: true,
        signedLoginToken,
        redirectURLAfterLogin,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        error,
      };
    }
  },
};
