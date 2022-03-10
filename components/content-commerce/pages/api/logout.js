export default (req, res) => {
  res.setHeader(
    "Set-Cookie",
    `authorized=deleted; HttpOnly; Max-Age=86400; Path=/`
  );
  res.setHeader("Location", "/");

  return res.status(302).send("OK");
};
