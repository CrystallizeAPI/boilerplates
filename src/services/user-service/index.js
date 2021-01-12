const jwt = require("jsonwebtoken");
const invariant = require("invariant");

const emailService = require("../email-service");

const JWT_SECRET = process.env.JWT_SECRET;

const USER_SESSION_COOKIE_NAME = "user-session";

module.exports = {
  USER_SESSION_COOKIE_NAME,
  getLogoutLink({ host }) {
    return `${host}/api/user/logout`;
  },
  authenticate(token) {
    invariant(JWT_SECRET, "JWT_SECRET missing");

    if (!token) {
      return null;
    }

    /**
     * Here you would confirm the token provided by the cookie is a valid token
     * for a user. The boilerplate has no datastore or service to persist users,
     * so we will assume that the token is valid.
     */
    const decoded = jwt.verify(token, JWT_SECRET);

    return {
      email: decoded.email,
    };
  },
  async sendMagicLink({ email, loggedInRedirect, host }) {
    invariant(JWT_SECRET, "JWT_SECRET missing");

    const loginLink = new URL(`${host}/api/user/login-magic-link`);

    /**
     * Add the JWT to the callback url
     * When the link is visited, we can validate the token
     * again in the validateMagicLinkToken method
     */
    loginLink.searchParams.append(
      "token",
      jwt.sign({ email, loggedInRedirect }, JWT_SECRET, {
        expiresIn: "36000s",
      })
    );

    const { success } = await emailService.sendUserMagicLink({
      loginLink: loginLink.toString(),
      email,
    });

    return { success };
  },
  validateMagicLinkToken(token) {
    invariant(JWT_SECRET, "JWT_SECRET missing");

    /**
     * Here we would want to fetch an entry matching the provided token from our
     * datastore. This boilerplate does not have a datastore connected to it yet
     * so we will just assume the token is for a real user and sign a login token
     * accordingly.
     */

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const { email, loggedInRedirect } = decoded;

      const signedLoginToken = jwt.sign({ email }, JWT_SECRET, {
        expiresIn: "24h",
      });

      return {
        success: true,
        signedLoginToken,
        loggedInRedirect,
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
