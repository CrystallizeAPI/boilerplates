export default (req, res) => {
  res.send({
    isLoggedIn: req.cookies.authorized === "true",
  });
};
