module.exports = function getHost(req = {}) {
  const { headers } = req;

  if (process.env.HOST_URL) {
    return process.env.HOST_URL;
  }

  // If behind a reverse proxy like AWS Elastic Beanstalk for instance
  const { "x-forwarded-proto": xprotocol, "x-forwarded-host": xhost } = headers;
  if (xprotocol && xhost) {
    return `${xprotocol}://${xhost}`;
  }

  const { host } = headers;
  if (host) {
    if (host.startsWith("localhost")) {
      return `http://${host}`;
    }
  }

  // Local proxy url using Ngrok
  if (process.env.NGROK_URL) {
    return process.env.NGROK_URL;
  }

  // If hosted on Vercel
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  throw new Error("Cannot determine host from req");
};
