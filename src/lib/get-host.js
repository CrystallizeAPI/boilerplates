module.exports = function getHost({ headers }) {
  // If behind a reverse proxy like AWS Elastic Beanstalk for instance
  const { "x-forwarded-proto": xprotocol, "x-forwarded-host": xhost } = headers;
  if (xprotocol && xhost) {
    return `${xprotocol}://${xhost}`;
  }

  const { host } = headers;
  if (host && host.startsWith("localhost")) {
    return `http://${host}`;
  }

  if (process.env.HOST_URL) {
    return process.env.HOST_URL;
  }

  // If hosted on Vercel
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (!host) {
    throw new Error("Cannot determine host for the current request context");
  }

  return `https://${host}`;
};
