import Cors from "cors";

/**
 * These are the origins that are allowed to make requests to the Service API
 */
const whitelistedOrigins = ["http://localhost:3000", "http://example2.com"];

export default function (req, res) {
  return new Promise((resolve, reject) => {
    Cors({
      origin: true,
      // Only allow requests with GET, POST and OPTIONS
      methods: ["GET", "POST", "OPTIONS"],
      credentials: true,
    })(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
