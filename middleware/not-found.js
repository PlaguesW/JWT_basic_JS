const notFound = (req, res) =>
  res.status(404).send("Route does not exist  WHY?");

module.exports = notFound;
