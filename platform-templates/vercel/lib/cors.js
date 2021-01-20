import Cors from "cors";

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
